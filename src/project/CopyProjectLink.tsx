import React from "react";

import { styled } from "../stitches.config";

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
        <SectionTitle>編集用リンクをコピー</SectionTitle>
        <CopyExplanation>色紙を記入してもらうには右のボタンからURLをコピーして共有してください</CopyExplanation>
      </TextWrapper>
      <LinkCopyButton onClick={copyLink}>コピーする</LinkCopyButton>
    </Container>
  );
};

const Container = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

const TextWrapper = styled("div", {
  flex: 1,
  paddingRight: "4px",
});

const SectionTitle = styled("h3", {
  color: "$textPrimary",
  fontWeight: "700",
  fontSize: "16px",
  textAlign: "left",
  margin: "0",
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
