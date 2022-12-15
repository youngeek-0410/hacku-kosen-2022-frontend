import React from "react";

import { ViewAll } from "../../common/ViewAll";
import { styled } from "../../stitches.config";

export const ProjectHeading3: React.FC<{ viewAllLink?: string }> = ({ viewAllLink, children }) => {
  return (
    <Heading>
      <Text>{children}</Text>
      {viewAllLink ? <ViewAll href={viewAllLink} /> : null}
    </Heading>
  );
};

const Heading = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  margin: "32px 0 0",
});

const Text = styled("h2", {
  fontWeight: "700",
  fontSize: "16px",
  color: "$textPrimary",
  margin: "0",
});
