import React from "react";

import { styled } from "../stitches.config";

import { SectionTitle } from "./NewMessagePage";

type Props = {
  senderName: string;
  onChange(v: string): void;
};

const senderNamePlaceholder = "山田 花子";

export const SenderNameEdit: React.FC<Props> = (props) => {
  return (
    <>
      <SectionTitle>あなたのお名前をどうぞ</SectionTitle>
      <InputSenderName
        value={props.senderName}
        placeholder={senderNamePlaceholder}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </>
  );
};

const InputSenderName = styled("input", {
  width: "100%",
});
