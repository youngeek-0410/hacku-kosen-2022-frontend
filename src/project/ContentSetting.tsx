import { useRouter } from "next/router";
import React from "react";

import { styled } from "../stitches.config";

import { ProjectHeading2 } from "./common/ProjectHeading2";
import { ProjectHeading3 } from "./common/ProjectHeading3";
import { ProjectParagraph } from "./common/ProjectParagraph";
import { CurrentMusic } from "./CurrentMusic";
import { SomeImageMessages } from "./SomeImageMessage";
import { SomeTextMessages } from "./SomeTextMessages";
import { Project } from "./type";

type Props = {
  project: Project;
};
export const ContentSetting: React.FC<Props> = (props) => {
  const router = useRouter();
  const { project_id } = router.query;
  return (
    <>
      <SectionTitle>
        <ProjectHeading2>サイトコンテンツ</ProjectHeading2>
        <ProjectParagraph>オリジナルWebサイトに載せるコンテンツを管理できます。</ProjectParagraph>
      </SectionTitle>

      <Section>
        <ProjectHeading3>思い出の音楽</ProjectHeading3>
        <CurrentMusic />
      </Section>

      <Section>
        <ProjectHeading3 viewAllLink={`/projects/${project_id}/text_messages`}>
          {props.project.text_messages.count}件のメッセージ
        </ProjectHeading3>

        <SomeTextMessages textMessageData={props.project.text_messages} />
      </Section>

      <Section>
        <ProjectHeading3 viewAllLink={`/projects/${project_id}/image_messages`}>
          {props.project.image_messages.count}件の写真
        </ProjectHeading3>

        <SomeImageMessages imageMessageData={props.project.image_messages} />
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
