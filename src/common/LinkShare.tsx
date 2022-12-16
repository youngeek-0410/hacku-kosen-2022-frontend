import React from "react";
import { FiShare, FiClipboard } from "react-icons/fi";

import { styled } from "../stitches.config";

export const LinkShare: React.FC = () => {
  const url = location.href;
  const copyLink = () => {
    navigator.clipboard.writeText(url);
    console.log("copy");
  };
  const shareLink = () => {
    const data = {
      url: url,
    };
    navigator.share(data);
  };

  return (
    <>
      <span>{url}</span>
      <ShareButton onClick={shareLink}>
        <FiShare />
      </ShareButton>
      <CopyClipboard onClick={copyLink}>
        <FiClipboard />
      </CopyClipboard>
    </>
  );
};

const CopyClipboard = styled("button", {});

const ShareButton = styled("button", {});
