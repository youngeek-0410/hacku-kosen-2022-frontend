import { useRouter } from "next/router";
import React, { useState } from "react";

import { styled } from "../stitches.config";

import { ImageMessageEdit } from "./ImageMessageEdit";
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
      <ImageMessageEdit />
      <SenderNameEdit senderName={senderName} setSenderName={setSenderName} />

      <SendMessageButtonWrapper>
        <SendMessageButton onClick={sendNewMessage} disabled={!canSendMessage}>
          思いをとどける
        </SendMessageButton>
      </SendMessageButtonWrapper>
    </div>
  );
};

export const SectionTitle = styled("p", {});

const SendMessageButton = styled("button", {});

const SendMessageButtonWrapper = styled("div", {
  textAlign: "center",
});

const UploadedImage = styled("img", {});
