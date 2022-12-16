import { useRouter } from "next/router";
import React from "react";
import { FiShare, FiClipboard } from "react-icons/fi";

import { styled } from "../stitches.config";

export const LinkShare: React.FC = () => {
  const router = useRouter();
  const hostName = "https://hacku-kosen-2022-frontend.vercel.app";
  const url = `${hostName}${router.asPath}`;
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
