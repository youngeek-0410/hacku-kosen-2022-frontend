import React from "react";

import { styled } from "../stitches.config";

export const MusicEdit: React.FC = () => {
  return (
    <Container>
      <Caption>思い出の音楽</Caption>
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
