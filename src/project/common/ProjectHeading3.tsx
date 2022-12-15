import React from "react";

import { ViewAll } from "../../common/ViewAll";
import { styled } from "../../stitches.config";

export const ProjectHeading3: React.FC<{ viewAllLink?: string }> = ({ viewAllLink, children }) => {
  return (
    <Base>
      <Heading3>{children}</Heading3>
      {viewAllLink ? <ViewAll href={viewAllLink} /> : null}
    </Base>
  );
};

const Base = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Heading3 = styled("h3", {
  fontWeight: "400",
  fontSize: "20px",
  color: "$textPrimary",
  margin: "0",
});
