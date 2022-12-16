import Link from "next/link";
import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

import { styled } from "../../stitches.config";

export const ProjectHeading3: React.FC<{ link?: { text: string; href: string } }> = ({ link, children }) => {
  return (
    <Base>
      <Heading3>{children}</Heading3>
      {link ? (
        <StyledLink href={link.href}>
          <Text>{link.text}</Text>
          <IoChevronForwardOutline />
        </StyledLink>
      ) : null}
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
