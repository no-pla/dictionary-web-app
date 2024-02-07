import React from "react";

const PlayIcon = ({ audio }: { audio: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width=""
      height=""
      viewBox="0 0 75 75"
      className="group w-[75px] h-[75px] sm:w-12 sm:h-12"
    >
      <g fill="#A445ED" fillRule="evenodd">
        <circle
          cx="37.5"
          cy="37.5"
          r="37.5"
          opacity=".25"
          fill="#A445ED"
          className={`${audio && "group-hover:opacity-100"}`}
        />
        <path
          d="M29 27v21l21-10.5z"
          className={`${
            audio && "group-hover:fill-white"
          } transition-colors duration-300 ease-in-out`}
        />
      </g>
    </svg>
  );
};

export default PlayIcon;
