"use client";

import Image from "next/image";
import React from "react";
import Logo from "@/public/images/logo.svg";
import { useResetRecoilState } from "recoil";
import { wordData } from "@/atom/atom";
import Darkmode from "./Darkmode";
import SelectFont from "./SelectFont";

const Header = () => {
  const reset = useResetRecoilState(wordData);
  /**TODO:
   * 2. 적응형 디자인 적용
   * 3. 플레이 버튼 호버 바꾸기
   * 4. 야간모드 local storage에 추가하기
   * 5. 폰트도 local storage에 추가하기
   */
  return (
    <header className="py-14 flex justify-between w-full">
      <button onClick={reset}>
        <Image src={Logo} alt="logo" />
      </button>
      <div className="flex items-center">
        <SelectFont />
        <div className="w-[1px] h-[32px] bg-[#e9e9e9] mx-6" />
        <Darkmode />
      </div>
    </header>
  );
};

export default Header;