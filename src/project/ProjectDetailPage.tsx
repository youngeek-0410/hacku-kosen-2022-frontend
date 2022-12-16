import React from "react";

import { styled } from "../stitches.config";

import { Project } from "./type";
import { ProjectSetting } from "./ProjectSetting";
import { ContentSetting } from "./ContentSetting";
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
        サプライズ計画
      </ReceiverName>

      <hr />

      <ProjectSetting />

      <hr />

      <ContentSetting {...props} />
    </Container>
  );
};

const Container = styled("div", {
  width: "85%",
  margin: "0 auto",
});

const ReceiverName = styled("h2", {
  fontSize: "36px",
  fontWeight: "400",
  textAlign: "left",
  marginBottom: "16px",
});
