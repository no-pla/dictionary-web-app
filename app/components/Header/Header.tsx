"use client";

import React from "react";
import { useResetRecoilState } from "recoil";
import { wordData } from "@/atom/atom";
import Darkmode from "./Darkmode";
import SelectFont from "./SelectFont";
import LogoIcon from "./icons/LogoIcon";

const Header = ({ resetError }: any) => {
  const reset = useResetRecoilState(wordData);

  const onClickReset = () => {
    reset();
    resetError();
  };

  return (
    <header className="my-14 flex justify-between w-full sm:my-6">
      <button onClick={onClickReset}>
        <LogoIcon />
      </button>
      <div className="flex items-center">
        <SelectFont />
        <div className="w-[1px] h-8 bg-[#e9e9e9] mx-6 sm:mx-4" />
        <Darkmode />
      </div>
    </header>
  );
};

export default Header;
