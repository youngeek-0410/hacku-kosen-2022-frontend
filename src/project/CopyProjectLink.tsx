import React from "react";

import { styled } from "../stitches.config";

import { ProjectHeading3 } from "./common/ProjectHeading3";

export const CopyProjectLink: React.FC = () => {
  const copyLink = () => {
    const url = location.href;
    navigator.clipboard.writeText(url);
    // ポップアップを表示する？
    alert("copied!");
  };

  return (
    <Container>
      <TextWrapper>
        <ProjectHeading3>編集用リンクをコピー</ProjectHeading3>
        <CopyExplanation>色紙を記入してもらうには右のボタンからURLをコピーして共有してください</CopyExplanation>
      </TextWrapper>
      <LinkCopyButton onClick={copyLink}>コピーする</LinkCopyButton>
    </Container>
  );
};

const Container = styled("div", {});

const TextWrapper = styled("div", {
  flex: 1,
  paddingRight: "4px",
});

const CopyExplanation = styled("p", {
  color: "$textPrimary",
  fontWeight: "400",
  fontSize: "14px",
  textAlign: "left",
  margin: "8px 0 0",
});

const LinkCopyButton = styled("button", {
  minwidth: "80px",
  minHeight: "32px",
  color: "white",
  background: "$yellow900",
  fontWeight: "700",
  fontSize: "12px",
  border: "none",
  borderRadius: "8px",
});
