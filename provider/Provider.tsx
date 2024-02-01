"use client";

import React from "react";
import { RecoilRoot } from "recoil";
import FontProvider from "./FontProvider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <FontProvider>{children}</FontProvider>
    </RecoilRoot>
  );
};

export default Provider;
