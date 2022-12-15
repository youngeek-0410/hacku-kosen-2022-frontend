import Link from "next/link";
import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

import { styled } from "../stitches.config";

export const ViewAll: React.FC<{ href: string }> = ({ href }) => {
  return (
    <StyledLink href={href}>
      <Text>すべて見る</Text>
      <IoChevronForwardOutline />
    </StyledLink>
  );
};

const StyledLink = styled(Link, {
  color: "$yellow900",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  textDecoration: "none",
});

const Text = styled("p", {
  fontWeight: "700",
  fontSize: "12px",
  paddingRight: "4px",
  margin: "0",
});
