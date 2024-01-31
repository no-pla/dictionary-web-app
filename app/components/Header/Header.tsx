"use client";

import Image from "next/image";
import React from "react";
import Logo from "@/public/images/logo.svg";
import { useResetRecoilState } from "recoil";
import { wordData } from "@/atom/atom";
import Darkmode from "./Darkmode";

const Header = () => {
  const reset = useResetRecoilState(wordData);
  /**TODO:
   * 1. 폰트 변경
   * 2. 적응형 디자인 적용
   */
  return (
    <header className="py-14 flex justify-between w-full">
      <button onClick={reset}>
        <Image src={Logo} alt="logo" />
      </button>
      <div className="flex gap-3">
        <div>폰트 변경</div>
        <Darkmode />
      </div>
    </header>
  );
};

export default Header;
