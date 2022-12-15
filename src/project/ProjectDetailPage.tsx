import React from "react";

import { styled } from "../stitches.config";

import { Project } from "./type";
import { CopyProjectLink } from "./CopyProjectLink";
import { MusicEdit } from "./MusicEdit";
import { SomeTextMessages } from "./SomeTextMessages";
import { SomeImageMessages } from "./SomeImageMessage";

type Props = {
  project: Project;
};

export const ProjectDetailPage: React.FC<Props> = (props) => {
  return (
    <Container>
      <ReceiverName>{props.project.receiver_name}さんへの色紙</ReceiverName>

      <ButtonWrapper>
        <PreviewButton>プレビューを表示</PreviewButton>
        <CompleteButton>完成する</CompleteButton>
      </ButtonWrapper>

      <CopyProjectLink />
      <MusicEdit />
      <SomeTextMessages textMessageData={props.project.text_messages} />
      <SomeImageMessages imageMessageData={props.project.image_messages} />
    </Container>
  );
};

const Container = styled("div", {
  width: "85%",
  margin: "0 auto 120px",
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
  border: "1px solid $yellow900",
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
  fontSize: "28px",
  fontWeight: "400",
  textAlign: "left",
});
