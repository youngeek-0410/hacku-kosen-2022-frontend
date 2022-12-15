import React from "react";

import { styled } from "../stitches.config";

import { SectionTitle } from "./NewMessagePage";

type Props = {
  sectionValue: string;
  onChange(v: string): void;
};

export const TextMessageEdit: React.FC<Props> = (props) => {
  return (
    <>
      <SectionTitle>送るメッセージを入力してください</SectionTitle>
      <InputTextMessage rows={9} value={props.sectionValue} onChange={(e) => props.onChange(e.target.value)} />
    </>
  );
};

const InputTextMessage = styled("textarea", {
  width: "100%",
});
