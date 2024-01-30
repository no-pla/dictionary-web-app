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
      <span className="text-[64px]">{word.icon}</span>
      <div className="my-6 font-bold text-headingS">{word?.title}</div>
      <div className="text-bodyM text-[#757575]">
        <span>{word?.message}</span>
        <span>{word?.resolution}</span>
      </div>
    </div>
  );
};

export default WordNotFound;
