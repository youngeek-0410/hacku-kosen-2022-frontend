import { useRouter } from "next/router";
import React, { useState } from "react";

import { ImageSelector, useImageSelector } from "../../common/ImageSelector";
import { styled } from "../../stitches.config";
import { Headline } from "../common/Headline";
import { Project } from "../type";

import { SenderNameEdit } from "./SenderNameEdit";
import { TextMessageEdit } from "./TextMessageEdit";

const callMessageApi = (textMessage: string, senderName: string, imageMessage?: string) => {
  return alert(`text: ${textMessage} sender: ${senderName} image: ${imageMessage}`);
};

type Props = {
  project: Project;
};
export const NewMessagePage: React.FC<Props> = ({ project }) => {
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

  const [images, onFileChange, onFileDelete] = useImageSelector();

  return (
    <>
      <Headline title={`${project.receiver_name}さんへのメッセージ`} />

      <TextMessageEdit sectionValue={textMessage} onChange={setTextMessage} />
      <ImageSelector images={images} choseLimit={6} onFileChange={onFileChange} onFileDelete={onFileDelete} />
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
