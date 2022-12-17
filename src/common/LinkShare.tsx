import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FiShare, FiClipboard } from "react-icons/fi";

import { styled } from "../stitches.config";

export const LinkShare: React.FC<{ url: string }> = (props) => {
  const router = useRouter();
  const [canShare, setCanShare] = useState(false);
  const copyLink = () => {
    navigator.clipboard.writeText(props.url);
  };
  const shareLink = () => {
    const data: ShareData = {
      url: props.url,
    };
    navigator.share(data);
  };

  useEffect(() => {
    // NOTE: mac chrome で share がかけないらしいがぱっと対応コードが書けなかったのであと回し
    // setCanShare(Object.hasOwn(navigator, "share"));
  }, []);

  return (
    <Base>
      <PostMessageUrl>{props.url}</PostMessageUrl>
      {canShare ? (
        <Icon onClick={shareLink}>
          <FiShare />
        </Icon>
      ) : (
        <Icon onClick={copyLink}>
          <FiClipboard />
        </Icon>
      )}

      {/* 実際にサイトに飛べるアイコンリンク */}
    </Base>
  );
};

const Base = styled("div", {
  display: "flex",
});

const PostMessageUrl = styled("p", {
  overflowWrap: "anywhere",
  marginRight: "8px",
});

const Icon = styled("button", {
  border: "none",
  margin: "8px 16px 0 0",
  padding: "0",
  fontSize: "24px",
  background: "inherit",
  cursor: "pointer",
  transition: "opacity 0.15s 0.05s",
  "&:active": {
    opacity: 0.5,
  },
});
