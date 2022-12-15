import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { styled } from "../../stitches.config";
import { Project } from "../type";

import { ProjectTopMessages } from "./ProjectTopMessages";
import { CopyProjectLink } from "./CopyProjectLink";
import { MusicEdit } from "./MusicEdit";

type Props = {
  project: Project;
};

export const ProjectDetailPage: React.FC<Props> = (props) => {
  const router = useRouter();
  const { project_id } = router.query;

  const messageData = {
    textMessageData: props.project.text_messages,
    imageMessageData: props.project.image_messages,
  };

  return (
    <Container>
      <ReceiverName>{props.project.receiver_name}さんへの色紙</ReceiverName>
      <ButtonWrapper>
        <PreviewButton>プレビューを表示</PreviewButton>
        <CompleteButton>完成する</CompleteButton>
      </ButtonWrapper>
      <CopyProjectLink />
      <MusicEdit></MusicEdit>
      {/* <SpotifyMusicSelect {...SampleMusic}></SpotifyMusicSelect> */}
      <ProjectTopMessages {...messageData} />
      <div>
        <NewMessageLink
          href={{
            pathname: "/projects/[project_id]/new_message",
            query: { project_id: project_id },
          }}
        >
          思いをとどける
        </NewMessageLink>
      </div>
    </Container>
  );
};

const Container = styled("div", {
  width: "80%",
  textAlign: "center",
  margin: "0 auto 120px",
  position: "relative",
});

const ButtonWrapper = styled("div", {
  margin: "16px auto 32px",
  display: "flex",
  justifyContent: "center",
});

const PreviewButton = styled("button", {
  fontWeight: "700",
  fontSize: "16px",
  color: "$yellow900",
  background: "white",
  width: "47%",
  minWidth: "154px",
  height: "39px",
  border: "1px solid #8E6C2C",
  borderRadius: "44px",
  margin: "0 auto 0 0",
});

const CompleteButton = styled("button", {
  fontWeight: "700",
  fontSize: "16px",
  color: "white",
  background: "$yellow900",
  border: "none",
  width: "47%",
  minWidth: "155px",
  height: "39px",
  borderRadius: "44px",
});

const ReceiverName = styled("h2", {
  fontSize: "24px",
  fontWeight: "700",
  textAlign: "left",
});

const NewMessageLink = styled(Link, {
  color: "#FFFFFF",
  background: "$yellow900",
  fontWeight: "700",
  fontSize: "20px",
  width: "80%",
  maxWidth: "100%",
  height: "61px",
  borderRadius: "44px",
  border: "none",
  margin: "30px auto",
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  position: "fixed",
  bottom: 0,
  left: "10%",
});
