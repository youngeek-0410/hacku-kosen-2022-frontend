import React from "react";

import { styled } from "../stitches.config";

import { ProjectHeading3 } from "./common/ProjectHeading3";

export const MusicEdit: React.FC = () => {
  return (
    <Container>
      <ProjectHeading3>思い出の音楽</ProjectHeading3>
      <PlannedMusic></PlannedMusic>
    </Container>
  );
};

const Container = styled("div", {});

const Caption = styled("h2", {
  fontWeight: "700",
  fontSize: "16px",
  color: "$textPrimary",
  textAlign: "left",
  margin: "48px 0 8px",
});

const PlannedMusic = styled("div", {
  width: "100%",
  height: "70px",
  background: "#191414",
  margin: "0 0 32px",
});
