"use client";

import React, { useEffect, useRef, useState } from "react";

const SearchForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);

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
    if (error) {
      setError(false);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <form onSubmit={onSubmit} className="relative w-full max-w-[736px]">
        <input
          type="text"
          ref={inputRef}
          placeholder="Search for any word..."
          className={`w-full rounded-2xl bg-[#f4f4f4] px-6 py-5 border ${
            error ? "border-[#ff5252]" : "border-transparent"
          } focus:border-[#A445ed] outline-none
        dark:bg-[#1f1f1f] dark:text-white
        `}
        />
        {error && (
          <p className="text-[#ff5252] text-headingS">
            Whoops, can&#39;t be empty...
          </p>
        )}
        <button className="bg-search w-4 h-4 absolute top-1/2 transform -translate-y-1/2 right-6" />
      </form>
    </>
  );
};

export default SearchForm;
