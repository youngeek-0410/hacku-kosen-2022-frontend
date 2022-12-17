import { useRouter } from "next/router";
import React from "react";

import { LinkShare } from "../common/LinkShare";
import { styled } from "../stitches.config";

import { ProjectHeading2 } from "./common/ProjectHeading2";
import { ProjectHeading3 } from "./common/ProjectHeading3";
import { ProjectParagraph } from "./common/ProjectParagraph";

const newMessageLink = (projectId: string) =>
  `https://hacku-kosen-2022-frontend.vercel.app/projects/${projectId}/new_message`;
const previewLink = (projectId: string) => `https://cloveeee-dcp-frontend.vercel.app/preview/${projectId}`;
const publishLink = (projectId: string) => `https://cloveeee-dcp-frontend.vercel.app/${projectId}`;

export const ProjectSetting: React.FC = () => {
  const router = useRouter();
  const { project_id } = router.query;
  return (
    <>
      <SectionTitle>
        <ProjectHeading2>サイト管理</ProjectHeading2>
        <ProjectParagraph>みんなからの投稿を集めてオリジナルWebサイトを作成できます</ProjectParagraph>
      </SectionTitle>

      <Section>
        <ProjectHeading3>寄書き用リンクをコピー</ProjectHeading3>
        <ProjectParagraph>寄書きを投稿してもらうには右のボタンからURLをコピーして共有してください</ProjectParagraph>
        <LinkShare url={newMessageLink(project_id as string)} />
      </Section>

      <Section>
        <ProjectHeading3>プレビューをみる</ProjectHeading3>
        <ProjectParagraph>下のリンクから完成予定のオリジナルWebサイトを見ることが出来ます</ProjectParagraph>
        <LinkShare url={previewLink(project_id as string)} />
      </Section>

      <Section>
        <ProjectHeading3>サイトを公開する</ProjectHeading3>
        <ProjectParagraph>
          下のリンクを押したあと最終確認を済ませるとオリジナルWebサイトを公開することができます
        </ProjectParagraph>
        {/* TODO: いい感じコピーできるコンポーネントを用意する */}
        {/*  <LinkCopyButton onClick={copyLink}>コピーする</LinkCopyButton>*/}
      </Section>
    </>
  );
};

const Section = styled("div", {
  margin: "16px 0",
});
const SectionTitle = styled("div", {
  margin: "24px 0 36px",
});
