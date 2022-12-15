import React from "react";

import { styled } from "../../stitches.config";

export const ProjectHeading2: React.FC<{ viewAllLink?: string }> = ({ viewAllLink, children }) => {
  return (
    <Heading>
      <Text>{children}</Text>
    </Heading>
  );
};

const Heading = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Text = styled("h2", {
  fontWeight: "400",
  fontSize: "24px",
  color: "$textPrimary",
  margin: "0",
});
