import React from "react";

import { styled } from "../../stitches.config";
import { SectionTitle } from "../NewMessagePage";

export const BrowseMessage: React.FC = () => {
  return (
    <>
      <SectionTitle>件のメッセージ</SectionTitle>
      <BrowseAllLink>すべて見る</BrowseAllLink>
      <Messages></Messages>
    </>
  );
};

const Messages = styled("div", {});

export const BrowseAllLink = styled("a", {});
