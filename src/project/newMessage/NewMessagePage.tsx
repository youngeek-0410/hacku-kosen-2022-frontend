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

  const [textMessage, setTextMessage] = useState({ text: "", isTouched: false });
  const [senderName, setSenderName] = useState({ name: "", isTouched: false });

  const canSendMessage = textMessage.text !== "" && senderName.name !== "";

  const onClickSendButton = async () => {
    if (!canSendMessage) return; // NOTE: ユーザになぜ送信できないかを表示できるとより good. とりあえず後回し

    const imagesData = await toZipAndBase64(images);
    await createMessage(project_id as string, textMessage.text, imagesData, senderName.name);

    router.push(`/projects/${project_id}`);
  };

  const [images, onFileChange, onFileDelete] = useImageSelector();

  return (
    <>
      <Headline title={`${project.receiver_name}さんへの\nメッセージ`} />
      <Section>
        <label>送るメッセージを入力してください</label>
        <textarea
          rows={9}
          value={textMessage.text}
          onChange={(e) => setTextMessage({ text: e.target.value, isTouched: true })}
        />
        <InvalidMessage hidden={!(textMessage.text === "" && textMessage.isTouched)}>
          メッセージを入力してください
        </InvalidMessage>
      </Section>
      <Section>
        <label>送るメッセージを入力してください</label>
        <ImageSelector images={images} choseLimit={6} onFileChange={onFileChange} onFileDelete={onFileDelete} />
      </Section>
      <Section>
        <label>あなたのお名前をどうぞ</label>
        <input
          value={senderName.name}
          placeholder={senderNamePlaceholder}
          onChange={(e) => setSenderName({ name: e.target.value, isTouched: true })}
        />
        <InvalidMessage aria-live="polite" hidden={!(senderName.name === "" && senderName.isTouched)}>
          お名前を入力してください
        </InvalidMessage>
      </Section>
      <SendButton onClick={onClickSendButton} disabled={!canSendMessage}>
        想いをとどける
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
  margin: "40px auto",
  color: "#FFFFFF",
  background: "$yellow900",
  fontWeight: "700",
  fontSize: "20px",
  width: "306px",
  maxWidth: "100%",
  height: "61px",
  borderRadius: "44px",
  border: "none",
  "&:active": {
    background: "$yellow900-reaction",
  },
  "&:disabled": {
    background: "$gray400",
  },
});

const InvalidMessage = styled("p", {
  fontSize: "12px",
  color: "$alert",
  margin: "unset",
});
