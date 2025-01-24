import { atom, selector } from "recoil";
import axiosInstance from "../lib/axiosInstance";
// import { AuthResponse } from "../types";

export const auth = atom({
  key: "auth",
  default: null,
});

export const authCheck = selector({
  key: "check",
  get: async () => {
    try {
      const response = await axiosInstance.post("/auth/");
      let data = response.data;
      console.log("Auth Data:", data);

      if (data) {
        return data;
      }
      else {
        data={
          username:'firstName',
          email:'Anonymus@gmail.com'
        }
      }
    } catch (error) {
      console.error("Error fetching auth status:", error);
    }
    // eslint-disable-next-line no-undef
    return data;
  },
});
