import React from "react";

interface wordMeaning {
  antonyms: any[];
  definitions: {
    antonyms: any[];
    definition: string;
    synonyms: any[];
    example?: string;
  }[];
  partOfSpeech: string;
  synonyms: string[];
}

const WordMeaning = ({ meaning }: { meaning: wordMeaning[] }) => {
  return (
    <div className="flex flex-col ">
      {meaning.map((word, index: number) => {
        return (
          <div key={index}>
            <div className="relative flex items-center mb-[40px]">
              <span className="flex-shrink mr-4 text-headingM text-[#2d2d2d]">
                {word.partOfSpeech}
              </span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className="text-headingS text-[#757575] mb-[28px]">
              Meaning
            </div>
            <ul className="flex flex-col gap-[12px] ml-5 text-bodyM text-[#2d2d2d]">
              {word.definitions.map((definition, index: number) => {
                return (
                  <>
                    <li
                      key={index}
                      className="list-disc marker:text-[#8F19E8] list-inside"
                    >
                      {definition.definition}
                    </li>
                    {definition.example && (
                      <li
                        key={index}
                        className="list-disc marker:text-transparent list-inside text-[#757575]"
                      >
                        &#34;{definition.example}&#34;
                      </li>
                    )}
                  </>
                );
              })}
            </ul>
            {word.synonyms.length !== 0 && (
              <div className="mt-[40px] flex items-center mb-[28px] gap-6">
                <div className="text-headingS text-[#757575]">Synonyms</div>
                <div className="font-bold text-[20px] text-[#a445ed]">
                  {word.synonyms.map((synonym, index) => {
                    return (
                      <span
                        key={index}
                        className={`pr-2 ${
                          index !== word.synonyms.length - 1 &&
                          "after:content-[',']"
                        }`}
                      >
                        {synonym}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WordMeaning;
