import React from "react";

import { styled } from "../stitches.config";

export const NewMessagePage: React.FC = () => {
  return (
    <div>
      <SectionTitle>送るメッセージを入力してください</SectionTitle>
      <InputTextMessage />
      <SectionTitle>思い出の写真をアップロードしてください</SectionTitle>
      <Images>
        <UploadImages type="file" accept="image/*" multiple />
      </Images>
      <SectionTitle>あなたのお名前をどうぞ</SectionTitle>
      <InputSenderName />
      <SendMessageButtonWrapper>
        <SendMessageButton>思いをとどける</SendMessageButton>
      </SendMessageButtonWrapper>
    </div>
  );
};

const SectionTitle = styled("p", {});

const InputTextMessage = styled("textarea", {
  width: "100%",
});

const InputSenderName = styled("input", {
  width: "100%",
});

const Images = styled("div", {});

const UploadImages = styled("input", {});

const SendMessageButton = styled("button", {});

const SendMessageButtonWrapper = styled("div", {
  textAlign: "center",
});
