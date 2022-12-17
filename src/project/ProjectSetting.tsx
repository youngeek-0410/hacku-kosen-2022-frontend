import { useRouter } from "next/router";
import React, { useState } from "react";

import { LinkShare } from "../common/LinkShare";
import { styled } from "../stitches.config";

import { ProjectHeading2 } from "./common/ProjectHeading2";
import { ProjectHeading3 } from "./common/ProjectHeading3";
import { ProjectParagraph } from "./common/ProjectParagraph";
import { Project } from "./type";

const newMessageLink = (projectId: string) => `https://app.cloveeee.com/projects/${projectId}/new_message`;
const previewLink = (projectId: string) => `https://cloveeee.com/preview/${projectId}`;
const publishLink = (projectId: string) => `https://cloveeee.com/${projectId}`;

type Props = {
  project: Project;
};
export const ProjectSetting: React.FC<Props> = ({ project }) => {
  const router = useRouter();
  const { project_id } = router.query;
  const [isPublished, setIsPublished] = useState(false);

  const onClickPublishButton = () => {
    const isExistTopImage = !project.top_image;
    const isExistTopText = !project.top_text;
    const isExistSpotifyMusic = !project.spotify_music;
    const isExistImageMessages = project.image_messages.items.length <= 0;
    const isExistTextMessages = project.text_messages.items.length <= 0;

    let validationMessages = [];
    if (isExistImageMessages) validationMessages.push("画像を1枚以上投稿してください");
    if (isExistTextMessages) validationMessages.push("メッセージを1つ以上投稿してください");
    if (isExistSpotifyMusic) validationMessages.push("思い出の音楽を設定してください");
    if (isExistTopText) validationMessages.push("一言メッセージを設定してください");
    if (isExistTopImage) validationMessages.push("ベストショットしてください");

    if (validationMessages.length > 0) {
      alert(`
      サイトを公開するためには以下の確認が必要です。
      ${validationMessages.join("\n")}
      `);
      return;
    }

    alert(`サイトが完成しました！サイトに表示された完成リンクをサプライズ相手に渡しましょう`);
    setIsPublished(true);
    return;
  };

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
          下記のリンクから完成サイトを公開することができます。一度サイトを更新してしまうと再度編集を行うことができないので注意してください。
        </ProjectParagraph>
        {isPublished ? <LinkShare url={publishLink(project_id as string)} /> : null}
        <PublishButton disabled={isPublished} onClick={onClickPublishButton}>
          思いをとどける
        </PublishButton>
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

const PublishButton = styled("button", {
  color: "$gray50",
  letterSpacing: "0.05rem",
  background: "$yellow900",
  fontWeight: "400",
  fontSize: "14px",
  width: "100%",
  maxWidth: "150px",
  borderRadius: "44px",
  border: "none",
  padding: "8px 16px",
  margin: "8px 0 16px",
  cursor: "pointer",
  "&:active": {
    background: "$yellow900-reaction",
  },
  "&:disabled": {
    background: "$gray400",
  },
});
