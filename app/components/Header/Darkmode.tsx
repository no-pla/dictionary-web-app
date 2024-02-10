"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { MoonIcon } from "./icons/MoonIcon";

const Darkmode = () => {
  const [checked, onChecked] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChecked(event.currentTarget.checked);
    if (event.currentTarget.checked) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      onChecked(true);
    } else {
      document.documentElement.classList.remove("dark");
      onChecked(false);
    }
  }, []);

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
          checked={checked}
        />
        <span
          className={`text-black absolute cursor-pointer bg-white h-4 w-4 top-1 transition-all ease-in-out duration-100 ${
            checked ? "right-1" : "right-5"
          } rounded-full`}
        ></span>
      </label>
      <MoonIcon color={checked ? "#A445ED" : "#838383"} />
    </div>
  );
};

export default Darkmode;
