import { useRouter } from "next/router";
import React, { useState } from "react";

import { styled } from "../stitches.config";

import { SenderNameEdit } from "./SenderNameEdit";
import { TextMessageEdit } from "./TextMessageEdit";

const callMessageApi = (textMessage: string, senderName: string, imageMessage?: string) => {
  return alert(`text: ${textMessage} sender: ${senderName} image: ${imageMessage}`);
};

export const NewMessagePage: React.FC = () => {
  const [textMessage, setTextMessage] = useState("");
  const [senderName, setSenderName] = useState("");

  const router = useRouter();
  const { project_id } = router.query;

  const sendNewMessage = () => {
    if (!canSendMessage) return;
    callMessageApi(textMessage, senderName);

    router.push(`/projects/${project_id}`);
  };

  const canSendMessage = textMessage !== "" && senderName !== "";

  return (
    <div>
      <TextMessageEdit sectionValue={textMessage} onChange={setTextMessage} />

      <SectionTitle>思い出の写真をアップロードしてください</SectionTitle>
      <Images>
        <UploadImageArea type="file" accept="image/*" multiple />
        <UploadedImage src=""></UploadedImage>
      </Images>

      <SenderNameEdit senderName={senderName} setSenderName={setSenderName}></SenderNameEdit>

      <SendMessageButtonWrapper>
        <SendMessageButton onClick={sendNewMessage} disabled={!canSendMessage}>
          思いをとどける
        </SendMessageButton>
      </SendMessageButtonWrapper>
    </div>
  );
};

export const SectionTitle = styled("p", {});

const Images = styled("div", {});

const UploadImageArea = styled("input", {});

const SendMessageButton = styled("button", {});

const SendMessageButtonWrapper = styled("div", {
  textAlign: "center",
});

const UploadedImage = styled("img", {});
