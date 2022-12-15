import React from "react";

import { styled } from "../stitches.config";

export const AppHeader: React.FC = () => {
  return (
    <Header>
      <Logo src="/logo.svg" />
    </Header>
  );
};

const Header = styled("header", {
  background: "#ffffff",
  width: "100vw",
});

const Logo = styled("img", {
  margin: "8px 0 8px 16px",
  height: "32px",
});
