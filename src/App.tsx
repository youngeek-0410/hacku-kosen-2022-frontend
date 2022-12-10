import React from "react";

import { styled } from "./stitches.config";

export const App: React.FC<{}> = (props) => {
  return <StyledDiv {...props}>App</StyledDiv>;
};

const StyledDiv = styled("div", {
  color: "red",
});
