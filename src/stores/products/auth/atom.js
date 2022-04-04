import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: {
    token: null,
    user: null,
  },
});

export const userState = atom({
  key: "user",
  default: null,
});
