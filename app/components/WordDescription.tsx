import React from "react";
import Image from "next/image";
import PlayIcon from "@/public/images/icon-play.svg";

interface WordDescription {
  desc: {
    word: string;
    phonetic: string;
    phonetics: {
      audio: string;
      license: {
        name: string;
        url: string;
      };
      sourceUrl: string;
      text: string;
    };
  };
}

const WordDescription = ({ desc }: WordDescription) => {
  const audio = new Audio(desc.phonetics?.audio);
  const playAudio = () => {
    audio.play();
  };

  return (
    <div className="flex justify-between">
      <div>
        <div className="text-headingL text-[#2d2d2d]">{desc.word}</div>
        <div className="text-headingM text-[#a445ed]">{desc.phonetic}</div>
      </div>
      <button
        className={`${
          (desc.phonetics?.audio === "" || desc.phonetics === undefined) &&
          "cursor-not-allowed"
        }`}
        disabled={desc.phonetics?.audio === "" || desc.phonetics === undefined}
        onClick={playAudio}
      >
        <Image src={PlayIcon} alt="오디오 재생" />
      </button>
    </div>
  );
};

export default WordDescription;
