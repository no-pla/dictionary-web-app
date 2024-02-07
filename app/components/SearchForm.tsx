"use client";

import { wordData } from "@/atom/atom";
import React, { useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";

const SearchForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);
  const setWord = useSetRecoilState(wordData);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputRef.current?.value === "" || !inputRef.current) {
      setError(true);
      return;
    }

    const response = await fetch(
      `/api/dictionary?word=${inputRef?.current.value}`,
      {
        method: "GET",
      }
    );

    const word = await response.json();
    setWord(word);
    if (error) {
      setError(false);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={onSubmit} className="relative mb-[52px]">
      <input
        type="text"
        ref={inputRef}
        placeholder="Search for any word..."
        className={`w-full rounded-2xl bg-[#f4f4f4] px-6 py-5 border ${
          error ? "border-[#ff5252]" : "border-transparent"
        } focus:border-[#A445ed] outline-none cursor-pointer
        dark:bg-[#1f1f1f] dark:text-white
        `}
      />
      {error && (
        <p className="text-[#ff5252] text-headingS">
          Whoops, can&#39;t be empty...
        </p>
      )}
      <button
        className={`bg-search w-4 h-4 absolute ${
          error ? "top-1/3" : "top-1/2"
        } transform -translate-y-1/2 right-6`}
      />
    </form>
  );
};

export default SearchForm;
