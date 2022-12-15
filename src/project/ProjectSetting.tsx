import React from "react";

import { styled } from "../stitches.config";

import { ProjectHeading3 } from "./common/ProjectHeading3";

export const ProjectSetting: React.FC = () => {
  const copyLink = () => {
    const url = location.href;
    navigator.clipboard.writeText(url);
    // ポップアップを表示する？
    alert("copied!");
  };

  return (
    <Base>
      <Section>
        <ProjectHeading3>編集用リンクをコピー</ProjectHeading3>
        <Description>色紙を記入してもらうには右のボタンからURLをコピーして共有してください</Description>
        {/* TODO: いい感じコピーできるコンポーネントを用意する */}
        {/*  <LinkCopyButton onClick={copyLink}>コピーする</LinkCopyButton>*/}
      </Section>

      <Section>
        <ProjectHeading3>プレビューをみる</ProjectHeading3>
        <Description>下のリンクから完成予定のWebサイトを見ることが出来ます</Description>
        {/* TODO: いい感じコピーできるコンポーネントを用意する */}
        {/*  <LinkCopyButton onClick={copyLink}>コピーする</LinkCopyButton>*/}
      </Section>
    </Base>
  );
};

const Base = styled("div", {
  // padding: "16px 0",
});

const Section = styled("div", {
  // flex: 1,
  margin: "30px 0",
  // paddingRight: "4px",
});

const Description = styled("p", {
  color: "$gray500",
  fontWeight: "400",
  fontSize: "14px",
  margin: "0",
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
