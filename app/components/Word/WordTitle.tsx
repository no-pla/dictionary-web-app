import Image from "next/image";
import React from "react";
import PlayIcon from "@/public/images/icon-play.svg";

const WordTitle = ({ word }: any) => {
  const audio = new Audio(word.audio);
  const playAudio = () => {
    audio.play();
  };

  return (
    <div className="flex justify-between">
      <div>
        <div className="text-headingL text-[#2d2d2d] mb-[-10px] dark:text-white">
          {word.word}
        </div>
        <div className="text-headingM text-[#a445ed]">{word.phonetic}</div>
      </div>
      <button onClick={playAudio}>
        <Image src={PlayIcon} alt="Listening to pronunciation button" />
      </button>
    </div>
  );
};

export default WordTitle;
