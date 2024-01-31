import { atom } from "recoil";

export const wordData = atom<any>({
  key: "wordData",
  default: {
    exist: null,
  },
});
