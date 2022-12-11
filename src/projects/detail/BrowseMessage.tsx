import React from "react";

import { styled } from "../../stitches.config";
import { SectionTitle } from "../NewMessagePage";

export const BrowseMessage: React.FC = () => {
  return (
    <>
      <SectionTitle>件のメッセージ</SectionTitle>
      <BrowseAllLink href={"/"}>すべて見る</BrowseAllLink>
    </>
  );
};

const Messages = styled("div", {});

export const BrowseAllLink = styled("a", {});
