import { useRouter } from "next/router";
import React, { useState } from "react";

import { toZipAndBase64 } from "../../common/imageEncoder";
import { ImageSelector, useImageSelector } from "../../common/ImageSelector";
import { styled } from "../../stitches.config";
import { createMessage } from "../../utils/apis";
import { Headline } from "../common/Headline";
import { Project } from "../type";

type Props = {
  project: Project;
};

const senderNamePlaceholder = "山田 花子";
export const NewMessagePage: React.FC<Props> = ({ project }) => {
  const router = useRouter();
  const { project_id } = router.query;

  const [textMessage, setTextMessage] = useState("");
  const [senderName, setSenderName] = useState("");

  const canSendMessage = textMessage !== "" && senderName !== "";

  const onClickSendButton = async () => {
    if (!canSendMessage) return; // NOTE: ユーザになぜ送信できないかを表示できるとより good. とりあえず後回し

    const imagesData = await toZipAndBase64(images);
    await createMessage(project_id as string, textMessage, imagesData, senderName);

    router.push(`/projects/${project_id}`);
  };

  const [images, onFileChange, onFileDelete] = useImageSelector();

  return (
    <>
      <Headline title={`${project.receiver_name}さんへの\nメッセージ`} />
      <Section>
        <label>送るメッセージを入力してください</label>
        <textarea rows={9} value={textMessage} onChange={(e) => setTextMessage(e.target.value)} />
      </Section>
      <Section>
        <label>送るメッセージを入力してください</label>
        <ImageSelector images={images} choseLimit={6} onFileChange={onFileChange} onFileDelete={onFileDelete} />
      </Section>
      <Section>
        <label>あなたのお名前をどうぞ</label>
        <input value={senderName} placeholder={senderNamePlaceholder} onChange={(e) => setSenderName(e.target.value)} />
      </Section>
      <SendButton onClick={onClickSendButton} disabled={!canSendMessage}>
        思いをとどける
      </SendButton>
    </>
  );
};

const Section = styled("div", {
  marginTop: "32px",
  "& > input, textarea": {
    display: "block",
    width: "100%",
  },
  "& > label": {
    display: "block",
    marginBottom: "8px",
  },
});

const SendButton = styled("button", {
  display: "block",
  margin: "0 auto",
});
