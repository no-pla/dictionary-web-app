import React from "react";
import PlayIcon from "./PlayIcon";

const WordTitle = ({ word }: any) => {
  const audio = new Audio(word.audio);
  const playAudio = () => {
    audio.play();
  };

  return (
    <div className="flex justify-between items-center break-all">
      <div>
        <div className="text-headingL text-[#2d2d2d] mb-[-10px] dark:text-white mr-5 sm:text-[32px] sm:pb-2">
          {word.word}
        </div>
        <div className="text-headingM text-[#a445ed] sm:text-bodyM">
          {word.phonetic}
        </div>
      </div>
      <button
        onClick={playAudio}
        disabled={!word?.audio}
        className={`rounded-full w-fit h-fit ${
          word?.audio ? "cursor-pointer" : "cursor-not-allowed"
        } sm:w-12 sm:h-12`}
      >
        <PlayIcon audio={word?.audio} />
      </button>
    </div>
  );
};

export default WordTitle;
