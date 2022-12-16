import React from "react";

import { styled } from "../stitches.config";
import "./Loading.css";

type Props = {
  text?: string;
};

export const Loading: React.FC<Props> = ({ text }) => {
  return (
    <LoadingWrapper>
      <div className="spinner-box">
        <div className="circle-border">
          <div className="circle-core"></div>
        </div>
      </div>
      {text && <Text>{text}</Text>}
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled("div", {
  background: "$gray200",
  padding: "16px",
  borderRadius: "8px",
});

const Text = styled("p", {
  fontSize: "14px",
  color: "$textSecondary",
  textAlign: "center",
  fontWeight: "600",
});
