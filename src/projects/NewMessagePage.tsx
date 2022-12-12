import Link from "next/link";
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
  const router = useRouter();
  const { project_id } = router.query;

  const [textMessage, setTextMessage] = useState("");
  const [senderName, setSenderName] = useState("");

  const canSendMessage = textMessage !== "" && senderName !== "";

  const onClickSendMessage = () => {
    if (!canSendMessage) return; // NOTE: ユーザになぜ送信できないかを表示できるとより good. とりあえず後回し
    callMessageApi(textMessage, senderName);

    router.push(`/projects/${project_id}`);
  };

  const onClickBackButton = () => {
    router.push(`/projects/${project_id}`);
  };

  return (
    <>
      <BackButton
        href={{
          pathname: "/projects/[project_id]",
          query: { project_id: project_id },
        }}
      >
        もどる
      </BackButton>
      <TextMessageEdit sectionValue={textMessage} onChange={setTextMessage} />
      <ImageMessageEdit />
      <SenderNameEdit senderName={senderName} onChange={setSenderName} />

      <SendMessageButton onClick={onClickSendMessage} disabled={!canSendMessage}>
        思いをとどける
      </SendMessageButton>
    </>
  );
};

export const SectionTitle = styled("p", {});

const SendMessageButton = styled("button", {
  display: "block",
  margin: "0 auto",
});

const BackButton = styled(Link, {});
