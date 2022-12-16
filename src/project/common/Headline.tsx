import React from "react";

import { styled } from "../../stitches.config";

import { BackHome } from "./BackHome";

export const Headline: React.FC<{ title: string }> = (props) => {
  return (
    <Base>
      <BackHome />
      <Title>{props.title}</Title>
    </Base>
  );
};

const Base = styled("div", {
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
});

const Title = styled("p", {
  fontSize: "28px",
  fontWeight: "300",
  color: "$textPrimary",
  whiteSpace: "pre-wrap",
});
