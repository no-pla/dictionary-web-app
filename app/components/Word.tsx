import React from "react";
import WordDescription from "./WordDescription";
import WordMeaning from "./WordMeaning";
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

const Word = ({ word }: any) => {
  return (
    <div className="flex flex-col gap-[39px]">
      {word.map((res: WordDefinition) => {
        return (
          <div key={res.id} className="flex flex-col gap-10">
            <WordDescription
              desc={{
                word: res.word,
                phonetic: res.phonetic,
                phonetics: res.phonetics[res.phonetics.length - 1],
              }}
            />
            <WordMeaning meaning={res.meanings} />
            <div className="border-[#979797] border-t py-5 text-bodyS">
              <span className="pr-4 underline text-[#757575] ">Source</span>
              <Link href={res.license.url} className="underline text-[#2d2d2d]">
                {res.license.url}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Word;
