"use client";

import { fontData } from "@/atom/atom";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import ToggleIcon from "./icons/ToggleIcon";

const SelectFont = () => {
  const [font, setFont] = useRecoilState(fontData);
  const [openFont, setOpenFont] = useState(false);

  const selectFont = (event: any) => {
    setFont(event.currentTarget.dataset.id);
    localStorage.setItem("font", event.currentTarget.dataset.id);
  };

  return (
    <div
      onClick={() => setOpenFont((prev) => !prev)}
      className="flex items-center gap-6 cursor-pointer sm:gap-4 sm:text-[14px] fold:text-[12px] fold:gap-2"
    >
      <div className="relative">
        <div className={`font-${font} font-bold`}>
          {font === "sans" ? "Sans Serif" : font === "serif" ? "Serif" : "Mono"}
        </div>
        {openFont && (
          <ul
            className={`absolute top-9 left-0 w-[183px] text-[18px] font-bold bg-white p-6 flex flex-col gap-4 z-10 rounded-2xl shadow-fontShadow dark:bg-[#1f1f1f] dark:shadow-fontShadowDark sm:text-[14px] sm:left-0 sm:w-[160px] fold:left-0`}
          >
            <li
              onClick={(event) => selectFont(event)}
              data-id="sans"
              className="font-sans cursor-pointer hover:text-[#A445ED] transition-colors duration-300 ease-in-out"
            >
              Sans Serif
            </li>
            <li
              onClick={(event) => selectFont(event)}
              data-id="serif"
              className="font-serif cursor-pointer hover:text-[#A445ED] transition-colors duration-300 ease-in-out"
            >
              Serif
            </li>
            <li
              onClick={(event) => selectFont(event)}
              data-id="mono"
              className="font-mono cursor-pointer hover:text-[#A445ED] transition-colors duration-300 ease-in-out"
            >
              Mono
            </li>
          </ul>
        )}
      </div>
      <ToggleIcon />
    </div>
  );
};

export default SelectFont;
