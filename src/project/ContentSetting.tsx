import { useRouter } from "next/router";
import React from "react";

import { SpotifyMusicPlayground } from "../common/spotifyMusic/components/SpotifyMusicPlayground";
import { styled } from "../stitches.config";

import { ProjectHeading2 } from "./common/ProjectHeading2";
import { ProjectHeading3 } from "./common/ProjectHeading3";
import { ProjectParagraph } from "./common/ProjectParagraph";
import { TextMessageItem } from "./common/TextMessageItem";
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
        <ProjectParagraph>オリジナルWebサイトに載せるコンテンツを管理できます</ProjectParagraph>
      </SectionTitle>

      <Section>
        <ProjectHeading3 link={{ href: `/projects/${project_id}/spotify_music`, text: "変更する" }}>
          思い出の音楽
        </ProjectHeading3>
        <SectionItem>
          <SpotifyMusicPlayground spotifyMusic={props.project.spotify_music} />
        </SectionItem>
      </Section>

      <Section>
        <ProjectHeading3 link={{ href: `/projects/${project_id}/top_text`, text: "変更する" }}>
          ひと言メッセージ
        </ProjectHeading3>
        <ProjectParagraph>サイトトップに表示するメッセージです</ProjectParagraph>
        <SectionItem>
          <TextMessageItem messageData={{ type: "text", text: props.project.top_text }} />
        </SectionItem>
      </Section>

      <Section>
        <ProjectHeading3 link={{ href: `/projects/${project_id}/top_image`, text: "変更する" }}>
          ベストショット
        </ProjectHeading3>
        <ProjectParagraph>サイトトップに表示する写真です</ProjectParagraph>
        <SectionItem>
          <BestShot src={props.project.top_image.url} alt="" />
        </SectionItem>
      </Section>

      <Section>
        <ProjectHeading3 link={{ href: `/projects/${project_id}/text_messages`, text: "すべて見る" }}>
          {props.project.text_messages.count}件のメッセージ
        </ProjectHeading3>

        <SectionItem>
          <SomeTextMessages textMessageData={props.project.text_messages} />
        </SectionItem>
      </Section>

      <Section>
        <ProjectHeading3 link={{ href: `/projects/${project_id}/image_messages`, text: "すべて見る" }}>
          {props.project.image_messages.count}件の写真
        </ProjectHeading3>

        <SectionItem>
          <SomeImageMessages imageMessageData={props.project.image_messages} />
        </SectionItem>
      </Section>
    </>
  );
};

const Section = styled("div", {
  margin: "20px 0",
});

const SectionTitle = styled("div", {
  margin: "24px 0 36px",
});

const SectionItem = styled("div", {
  marginTop: "8px",
});

const BestShot = styled("img", {
  maxWidth: "100%",
  height: "auto",
});
