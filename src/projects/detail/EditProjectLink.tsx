import React from "react";

import { styled } from "../../stitches.config";
import { SectionTitle } from "../NewMessagePage";

export const EditProjectLink: React.FC = () => {
  return (
    <>
      <SectionTitle>編集用リンクをコピー</SectionTitle>
      <CopyExplanation>色紙を記入してもらうには右のボタンからURLをコピーして共有してください</CopyExplanation>
      <LinkCopyButton>コピーする</LinkCopyButton>
    </>
  );
};

const CopyExplanation = styled("span", {});

const LinkCopyButton = styled("button", {});
