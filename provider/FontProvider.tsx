"use client";
import { fontData } from "@/atom/atom";
import React from "react";
import { useRecoilValue } from "recoil";

const FontProvider = ({ children }: { children: any }) => {
  const font = useRecoilValue(fontData);
  return <div className={`font-${font}`}>{children}</div>;
};

export default FontProvider;
