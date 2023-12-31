"use client";
import { Branch, Department, Position, User, UserListData } from "@/types";
import UserList from "@/components/SearchList/UserList";
import SearchBar from "./SearchBar";
import SelectOption from "./SelectOption";
import { useState } from "react";
import { useTranslations } from "next-intl";
export default function SearchList({ data }: { data: UserListData }) {
  const t = useTranslations("Home");
  const dataUsers: User[] = data.users
    .sort((a, b) => a.PosittionId - b.PosittionId)
    .sort((a, b) => a.DepartmentId - b.DepartmentId)
    .sort((a, b) => a.UnitId - b.UnitId);
  const branchs: Branch[] = data.branchs;

  const departments: Department[] = data.departments;
  const positions: Position[] = data.positions;
  const [searchContent, setSearcContent] = useState<string>("");
  const [branchFilter, setBranchFilter] = useState<number>(-1);
  const [departmentFilter, setDepartmentFilter] = useState<number>(-1);
  const [positonFilter, setPositonFilter] = useState<number>(-1);

  const removeVietnameseDiacritics = (str: string | null) => {
    return str
      ? str
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
      : "";
  };
  const departmentsList = departments.filter((item) => {
    return item.ParentId == branchFilter;
  });
  const positionsList = positions.filter((item) => {
    return item.ParentId == departmentFilter;
  });
  const userList = dataUsers.filter((item) => {
    let branchs: boolean =
      branchFilter == -1 ? true : item.UnitId == branchFilter;
    let department: boolean =
      departmentFilter == -1 ? true : item.DepartmentId == departmentFilter;
    let position: boolean =
      positonFilter == -1 ? true : item.PosittionId == positonFilter;
    let hasChacracter: boolean =
      item.Name.toLowerCase().includes(searchContent.toLowerCase()) ||
      item.Email.toLowerCase().includes(searchContent.toLowerCase()) ||
      removeVietnameseDiacritics(item.DepartmentName).includes(
        removeVietnameseDiacritics(searchContent)
      );
    return hasChacracter && branchs && department && position;
  });
  function onBranchChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setBranchFilter(parseInt(event.target.value));
    setDepartmentFilter(-1);
    console.log(departmentFilter);
    setPositonFilter(-1);
  }
  function onDepartmentChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setDepartmentFilter(parseInt(event.target.value));
    setPositonFilter(-1);
  }
  function onPositionChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setPositonFilter(parseInt(event.target.value));
  }
  return (
    <>
      <SearchBar content={searchContent} searchHandler={setSearcContent} />

      <div className="flex items-center justify-center p-3">
        <SelectOption
          key="1"
          firstOption={t("home_all_branchs")}
          list={branchs}
          selectHandler={onBranchChange}
          defaultValue={branchFilter}
        />
        <SelectOption
          key="2"
          firstOption={t("home_all_departments")}
          list={departmentsList}
          selectHandler={onDepartmentChange}
          defaultValue={departmentFilter}
        />
        <SelectOption
          key="3"
          firstOption={t("home_all_positions")}
          list={positionsList}
          selectHandler={onPositionChange}
          defaultValue={positonFilter}
        />
      </div>

      <UserList list={userList} />
    </>
  );
}
