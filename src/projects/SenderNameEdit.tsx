import { styled } from "@stitches/react";
import React from "react";

import { SectionTitle } from "./NewMessagePage";

const senderNamePlaceholder = "山田 花子";

export const SenderNameEdit: React.FC<{ senderName: string; setSenderName: (v: string) => void }> = (props) => {
  const senderName = props.senderName;
  const setSenderName = props.setSenderName;
  return (
    <>
      <SectionTitle>あなたのお名前をどうぞ</SectionTitle>
      <InputSenderName
        value={senderName}
        placeholder={senderNamePlaceholder}
        onChange={(e) => setSenderName(e.target.value)}
      />
    </>
  );
};

const InputSenderName = styled("input", {
  width: "100%",
});
