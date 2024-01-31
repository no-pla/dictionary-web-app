"use client";

import React from "react";
import { wordData } from "@/atom/atom";
import { useRecoilValue } from "recoil";
import Word from "./Word";
import WordNotFound from "./WordNotFound";

const WordContainer = () => {
  const word = useRecoilValue(wordData);
  console.log(word);

  return word.exist ? (
    <Word />
  ) : (
    <WordNotFound
      word={
        word.exist === null
          ? {
              icon: "😃",
              title: "Search the word",
              resolution: "Search the word you want to know.",
            }
          : { ...word?.result, icon: "😕" }
      }
    />
  );
};

export default WordContainer;
