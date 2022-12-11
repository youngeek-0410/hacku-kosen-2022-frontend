import React from "react";

import { styled } from "../../stitches.config";
import { SectionTitle } from "../NewMessagePage";

export const CopyProjectLink: React.FC = () => {
  const copyLink = () => {
    const url = location.href;
    navigator.clipboard.writeText(url);
    // ポップアップを表示する？
    alert("copied!");
  };

  return (
    <>
      <SectionTitle>編集用リンクをコピー</SectionTitle>
      <CopyExplanation>色紙を記入してもらうには右のボタンからURLをコピーして共有してください</CopyExplanation>
      <LinkCopyButton onClick={copyLink}>コピーする</LinkCopyButton>
    </>
  );
};

const CopyExplanation = styled("span", {});

const LinkCopyButton = styled("button", {});
