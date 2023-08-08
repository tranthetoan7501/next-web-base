import axios from "axios";
import type { LoginResponse } from "@/types/index";
const API = axios.create({
  baseURL: process.env.USERS_BASE_URL,
  headers: {
    Authorization: process.env.USERS_TOKEN,
  },
});

export const login = () => {
  return API.post("/NguoiDung/Login", {
    userName: process.env.USERNAME,
    password: process.env.PASSWORD,
    lang: "vn",
    checkFingerprint: true,
    DeviceId: "",
  });
};
export const getContactList = async () => {
  const loginRespon: LoginResponse = await login();
  API.defaults.headers.common["Authorization"] = loginRespon.data.Data.Token;
  return API.get("/Office/contacts", { timeout: 6000 });
};
