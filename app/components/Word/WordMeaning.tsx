import React from "react";

const WordMeaning = ({ meaning }: any) => {
  return (
    <div className="flex flex-col gap-10">
      {meaning.map((mean: any, index: number) => {
        return (
          <div key={index}>
            <div className="relative flex items-center mb-10">
              <span className="italic flex-shrink mr-4 text-headingM text-[#2d2d2d] dark:text-white">
                {mean.partOfSpeech}
              </span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className="text-headingS text-[#757575] mb-6">Meaning</div>
            <ul className="list-disc list-inside marker:text-color-[#8f19e8] flex flex-col gap-[12px] text-bodyM">
              {mean.definitions.map((definition: any, index: number) => {
                return (
                  <li
                    key={index}
                    className="list-disc marker:text-[#8F19E8] list-inside"
                  >
                    {definition.definition}
                    {definition.example && (
                      <p className="text-[#757575] ml-5 mt-4">
                        &quot;{definition.example}&quot;
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default WordMeaning;
