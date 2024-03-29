"use client";

import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Header from "./Header/Header";
import SearchForm from "./SearchForm";
import WordContainer from "./Word/WordContainer";
import { useSetRecoilState } from "recoil";
import { fontData } from "@/atom/atom";

const Dictionary = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const setFont = useSetRecoilState(fontData);

  useEffect(() => {
    const font = localStorage.getItem("font");
    const theme = localStorage.getItem("theme");

    const fontValues = ["sans", "serif", "mono"];
    const themeValues = ["light", "dark"];

    if (!theme || !themeValues.includes(theme)) {
      localStorage.setItem("theme", "light");
    }

    if (!font || !fontValues.includes(font)) {
      localStorage.setItem("font", "sans");
    }
    setLoading(false);
    setFont(localStorage.getItem("font")!);
  }, []);

  return (
    <>
      {loading && (
        <div className="w-full h-full absolute top-1/2 -translate-y-1/2 flex justify-center items-center bg-white z-30">
          <Loading />
        </div>
      )}
      <div className="w-full max-w-[736px] md:px-5">
        <Header resetError={setError} />
        <SearchForm setError={setError} error={error} />
        <WordContainer />
      </div>
    </>
  );
};

export default Dictionary;
