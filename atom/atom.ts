import { atom } from "recoil";

export const wordData = atom<any>({
  key: "wordData",
  default: {
    exist: null,
  },
});

export const fontData = atom<any>({
  key: "font",
  default: "serif",
});
