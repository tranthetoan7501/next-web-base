"use client";
import { Branch, Department, Position, User, UserListData } from "@/types";
import UserList from "@/components/SearchList/UserList";
import SearchBar from "./SearchBar";
import SelectOption from "./SelectOption";
import { useState } from "react";
export default function SearchList({ data }: { data: UserListData }) {
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
    let hasChacracter: boolean =
      item.Name.toLowerCase().includes(searchContent.toLowerCase()) ||
      item.Email.toLowerCase().includes(searchContent.toLowerCase()) ||
      removeVietnameseDiacritics(item.DepartmentName).includes(
        removeVietnameseDiacritics(searchContent)
      );
    return hasChacracter;
  });
  console.log("branchs", branchs);
  return (
    <>
      <SearchBar content={searchContent} searchHandler={setSearcContent} />
      {branchs && (
        <div className="flex items-center justify-center p-3">
          <SelectOption key="1" list={branchs} />
          <SelectOption key="2" list={departmentsList} />
          <SelectOption key="3" list={positionsList} />
        </div>
      )}

      <UserList list={userList} />
    </>
  );
}
