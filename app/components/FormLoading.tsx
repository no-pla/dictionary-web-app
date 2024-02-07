import React from "react";

const FormLoading = ({ error }: any) => {
  return (
    <div
      className={`absolute  ${
        error ? "top-1/3" : "top-1/2"
      } transform -translate-y-1/2 right-14 flex gap-1`}
    >
      <div className="w-[6px] h-[6px] bg-[#A445ed] rounded-full animate-[bounce_0.5s_infinite]"></div>
      <div className="w-[6px] h-[6px] bg-[#A445ed] rounded-full animate-[bounce_0.5s_infinite_0.2s]"></div>
      <div className="w-[6px] h-[6px] bg-[#A445ed] rounded-full animate-[bounce_0.5s_infinite_0.3s]"></div>
    </div>
  );
};

export default FormLoading;
