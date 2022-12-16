import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FiShare, FiClipboard } from "react-icons/fi";

import { styled } from "../stitches.config";

export const LinkShare: React.FC = () => {
  const router = useRouter();

  const [canShare, setCanShare] = useState(true);
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

  useEffect(() => {
    // NOTE: mac chrome で share がかけないらしいがぱっと対応コードが書けなかったのであと回し
    // setCanShare(Object.hasOwn(navigator, "share"));
  }, []);

  return (
    <Base>
      {canShare ? (
        <ShareButton onClick={shareLink}>
          <FiShare />
        </ShareButton>
      ) : (
        <CopyClipboard onClick={copyLink}>
          <FiClipboard />
        </CopyClipboard>
      )}

      {/* 実際にサイトに飛べるアイコンリンク */}
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
