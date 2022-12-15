import React from "react";

import { styled } from "../stitches.config";

import { Project } from "./type";
import { ProjectSetting } from "./ProjectSetting";
import { MusicEdit } from "./MusicEdit";
import { SomeTextMessages } from "./SomeTextMessages";
import { SomeImageMessages } from "./SomeImageMessage";
// import { Publication } from "./Publication";

type Props = {
  project: Project;
};

export const ProjectDetailPage: React.FC<Props> = (props) => {
  return (
    <Container>
      <ReceiverName>
        {props.project.receiver_name}さんへの
        <br />
        サプライズ
      </ReceiverName>

      <hr />

      {/* <Publication /> */}

      <ProjectSetting />

      <hr />
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

const ReceiverName = styled("h2", {
  fontSize: "32px",
  fontWeight: "400",
  textAlign: "left",
  marginBottom: "16px",
});
