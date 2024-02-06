import React from "react";

interface WordNotFoundData {
  icon: string;
  message?: string;
  resolution: string;
  title: string;
}

const WordNotFound = ({ word }: { word: WordNotFoundData }) => {
  return (
    <div className="text-center mt-[132px]">
      <span className="text-[64px] sm:text-[52px] fold:text-[48px]">
        {word.icon}
      </span>
      <div className="my-6 font-bold text-headingS sm:text-[16px] sm:my-4 fold:text-[12px]">
        {word?.title}
      </div>
      <div className="text-bodyM text-[#757575] sm:text-[14px] fold:text-[10px] fold:leading-[16px]">
        <span>{word?.message}</span>
        <span>&nbsp;{word?.resolution}</span>
      </div>
    </div>
  );
};

export default WordNotFound;
