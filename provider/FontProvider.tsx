"use client";

import React from "react";
import { fontData } from "@/atom/atom";
import { useRecoilValue } from "recoil";

const FontProvider = ({ children }: { children: React.ReactNode }) => {
  const font = useRecoilValue(fontData);
  return <div className={`font-${font}`}>{children}</div>;
};

export default FontProvider;
