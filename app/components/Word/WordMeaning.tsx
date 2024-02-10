import React from "react";
import { Meaning } from "./Word";

interface WordDefinition {
  antonyms: string[] | [];
  definition: string;
  synonyms: string[] | [];
  example?: string;
}

const WordMeaning = ({ meaning }: any) => {
  return (
    <div className="flex flex-col gap-11 sm:gap-8">
      {meaning.map((mean: Meaning, index: number) => {
        return (
          <div key={index}>
            <div className="relative flex items-center mb-10 sm:mb-9">
              <span className="italic flex-shrink mr-4 text-headingM text-[#2d2d2d] dark:text-white sm:text-[18px]">
                {mean.partOfSpeech}
              </span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className="text-headingS text-[#757575] mb-6 sm:text-[16px] sm:mb-4">
              Meaning
            </div>
            <ul className="list-disc list-inside marker:text-color-[#8f19e8] flex flex-col gap-3 text-bodyM sm:text-[15px]">
              {mean.definitions.map(
                (definition: WordDefinition, index: number) => {
                  return (
                    <li
                      key={index}
                      className="list-disc marker:text-[#8F19E8] list-inside"
                    >
                      {definition.definition}
                      {definition.example && (
                        <p className="text-[#757575] ml-5 mt-4 sm:mt-3">
                          &quot;{definition.example}&quot;
                        </p>
                      )}
                    </li>
                  );
                }
              )}
            </ul>
            {mean?.synonyms.length !== 0 && (
              <div className="mt-6">
                <span className="text-[#757575] mr-4">Synonyms</span>
                <span className="text-[#A445ED]">
                  {mean?.synonyms.join(", ")}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WordMeaning;
