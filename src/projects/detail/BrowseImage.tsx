import React from "react";

import { SectionTitle } from "../NewMessagePage";

import { BrowseAllLink } from "./BrowseMessage";

export const BrowseImage: React.FC = () => {
  return (
    <>
      <SectionTitle>枚の写真</SectionTitle>
      <BrowseAllLink href={"/"}>すべて見る</BrowseAllLink>
    </>
  );
};
