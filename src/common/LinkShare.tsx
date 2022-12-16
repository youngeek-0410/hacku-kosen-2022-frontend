import { useRouter } from "next/router";
import React from "react";
import { FiShare, FiClipboard } from "react-icons/fi";

import { styled } from "../stitches.config";

export const LinkShare: React.FC = () => {
  const router = useRouter();
  const hostName = "https://hacku-kosen-2022-frontend.vercel.app";
  const url = `${hostName}${router.asPath}`;

  const share = () => {
    if (typeof navigator.share === "undefined") {
      return copyLink();
    } else {
      return shareLink();
    }
  };
  const copyLink = () => {
    navigator.clipboard.writeText(url);
  };
  const shareLink = () => {
    const data: ShareData = {
      url: url,
    };
    navigator.share(data);
  };
  return (
    <Base>
      <CopyClipboard onClick={share}>
        <FiClipboard />
      </CopyClipboard>
      <ShareButton onClick={share}>
        <FiShare />
      </ShareButton>
    </Base>
  );
};

const Base = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
});

const CopyClipboard = styled("button", {
  border: "none",
  margin: "8px 16px 0 0",
  padding: "0",
  fontSize: "24px",
  background: "inherit",
});

const ShareButton = styled("button", {
  border: "none",
  margin: "8px 16px 0 0",
  padding: "0",
  fontSize: "24px",
  background: "inherit",
});
