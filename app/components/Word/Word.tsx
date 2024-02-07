import React from "react";
import WordTitle from "./WordTitle";
import { useRecoilValue } from "recoil";
import { wordData } from "@/atom/atom";
import WordMeaning from "./WordMeaning";
import Image from "next/image";
import ShareIcon from "@/public/images/icon-new-window.svg";
import Link from "next/link";

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
          <div key={index} className="flex flex-col gap-10 sm:gap-9">
            <WordTitle
              word={{
                word: word.word,
                phonetic: word.phonetic,
                audio: word.phonetics[word.phonetics.length - 1]?.audio,
              }}
            />
            <WordMeaning meaning={word.meanings} />
            <div className="border-t border-[#979797] flex items-center text-bodyS py-5 sm:flex-col sm:items-start gap-[10px]">
              <div className="mr-5 text-[#979797] underline">Source</div>
              <div className="flex">
                <Link
                  href={word.sourceUrls[0]}
                  className="break-all underline mr-2"
                  target="_blank"
                >
                  {word.sourceUrls[0]}
                </Link>
                <Image src={ShareIcon} alt="open origin source" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Word;
