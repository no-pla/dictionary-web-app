import React from "react";
import WordTitle from "./WordTitle";
import { useRecoilValue } from "recoil";
import { wordData } from "@/atom/atom";
import WordMeaning from "./WordMeaning";
import Image from "next/image";
import ShareIcon from "@/public/images/icon-new-window.svg";

interface WordDefinition {
  id: number;
  license: { name: string; url: string };
  meanings: {
    antonyms: any[];
    definitions: {
      antonyms: any[];
      definition: string;
      synonyms: any[];
    }[];
    partOfSpeech: string;
    synonyms: string[];
  }[];
  phonetic: string;
  phonetics: any;
  sourceUrls: string[];
  word: string;
}

const Word = () => {
  const { result: words } = useRecoilValue(wordData);

  return (
    <>
      {words.map((word: any, index: number) => {
        return (
          <div key={index} className="flex flex-col gap-10">
            <WordTitle
              word={{
                word: word.word,
                phonetic: word.phonetic,
                audio: word.phonetics[word.phonetics.length - 1]?.audio,
              }}
            />
            <WordMeaning meaning={word.meanings} />
            <div className="border-t border-[#979797] flex items-center">
              <div className="my-5 mr-5 text-[#979797]">Source</div>
              <div className="my-5 mr-2">{word.sourceUrls[0]}</div>
              <Image src={ShareIcon} alt="open origin source" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Word;
