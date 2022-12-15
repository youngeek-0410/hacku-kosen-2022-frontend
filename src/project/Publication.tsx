import React from "react";

import { styled } from "../stitches.config";

export const Publication: React.FC = () => {
  return (
    <Base>
      <PreviewButton>プレビューを表示</PreviewButton>
      <PublishButton>完成する</PublishButton>
    </Base>
  );
};

const Base = styled("div", {
  margin: "48px auto 96px",
  display: "flex",
  justifyContent: "center",
});

const PreviewButton = styled("button", {
  fontWeight: "700",
  fontSize: "16px",
  color: "$yellow900",
  background: "white",
  width: "47%",
  minWidth: "154px",
  height: "39px",
  border: "1px solid $yellow900",
  borderRadius: "44px",
  margin: "0 auto 0 0",
});

const PublishButton = styled("button", {
  fontWeight: "700",
  fontSize: "16px",
  color: "white",
  background: "$yellow900",
  border: "none",
  width: "47%",
  minWidth: "155px",
  height: "39px",
  borderRadius: "44px",
});
