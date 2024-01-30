"use client";

import React, { ChangeEvent, useState } from "react";
import DarkModeIcon from "@/public/images/icon-moon.svg";
import Image from "next/image";

const Darkmode = () => {
  const [checked, onChecked] = useState(false);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChecked(event.currentTarget.checked);
  };
  return (
    <div className="h-5 flex gap-5 items-center">
      <label
        htmlFor="darkMode"
        className={`inline-block relative w-10 rounded-full transition-all ease-in-out duration-100 ${
          checked ? "bg-[#A445ED]" : "bg-[#757575]"
        }`}
      >
        <input
          id="darkMode"
          type="checkbox"
          className="h-0 w-0 opacity-0"
          onChange={(event) => onChange(event)}
        />
        <span
          className={`text-black absolute cursor-pointer bg-white h-4 w-4 top-1 transition-all ease-in-out duration-100 ${
            checked ? "right-1" : "right-5"
          } rounded-full`}
        ></span>
      </label>
      <Image src={DarkModeIcon} alt="Dark mode" />
    </div>
  );
};

export default Darkmode;
