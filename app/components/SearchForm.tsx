"use client";

import { wordData } from "@/atom/atom";
import React, { useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import FormLoading from "./FormLoading";

const SearchForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const setWord = useSetRecoilState(wordData);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;
    if (inputRef.current?.value === "" || !inputRef.current) {
      setError(true);
      return;
    }
    setLoading(true);
    const response = await fetch(
      `/api/dictionary?word=${inputRef?.current.value}`,
      {
        method: "GET",
      }
    );

    const word = await response?.json();
    setWord(word);
    if (error) {
      setError(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={onSubmit} className="relative mb-[52px] sm:my-6">
      <input
        type="text"
        ref={inputRef}
        placeholder="Search for any word..."
        className={`w-full rounded-2xl bg-[#f4f4f4] px-6 py-5 border ${
          error ? "border-[#ff5252]" : "border-transparent"
        } focus:border-[#A445ed] outline-none cursor-pointer
        dark:bg-[#1f1f1f] dark:text-white sm:py-3 sm:text-[16px] fold:text-[12px]
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
      {loading && <FormLoading error={error} />}
    </form>
  );
};

export default SearchForm;
