export interface User {
  Id: number;
  Name: string;
  NickName: string | null;
  Phone: string | null;
  PhoneBranch: string | null;
  Mobile: string;
  Email: string;
  PosittionId: number;
  PosittionName: string | null;
  PositionNameEn: string | null;
  DepartmentId: number;
  DepartmentName: string;
  DepartmentNameEn: string | null;
  UnitId: number;
  UnitName: string | null;
  UnitNameEn: string | null;
  Avatar: string | null;
  FirstLetter: string | null;
}
export interface Branch {
  Id: string;
  Name: string;
  NameEn: string;
  Code: string;
  Phone: string | null;
  ParentId: number;
  ShortName: string | null;
  PhoneBranch: string;
  IsDonVi: string;
  STT: string;
}

export interface Department {
  Id: string;
  Name: string;
  NameEn: string;
  Code: string;
  Phone: string | null;
  ParentId: number;
  ShortName: string | null;
  PhoneBranch: string;
  IsDonVi: string;
  STT: string;
}
export interface Position {
  Id: string;
  Name: string;
  NameEn: string;
  ParentId: number;
  ShortName: string | null;
  STT: string;
}
export interface UserListData {
  users: User[];
  branchs: Branch[];
  departments: Department[];
  positions: Position[];
}
export interface DataInResponse {
  Data: UserListData;
}
export interface ApiResponse {
  data: DataInResponse;
}

export interface LoginResponse {
  data: {
    Data: {
      Token: string;
    };
  };
}
