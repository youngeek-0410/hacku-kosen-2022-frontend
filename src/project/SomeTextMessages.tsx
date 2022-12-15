import { useRouter } from "next/router";
import React from "react";

import { ViewAll } from "../common/ViewAll";
import { styled } from "../stitches.config";

import { Message, SenderName, TextMessageContainer, TextMessageUnit } from "./textMessages/TextMessagesPage";
import { TextMessage } from "./type";

type Props = {
  textMessageData: {
    count: number;
    items: TextMessage[];
  };
};

export const SomeTextMessages: React.FC<Props> = (props) => {
  const router = useRouter();
  const project_id = router.query.project_id;

  return (
    <Container>
      <ItemsCaption>
        <CaptionTitle>{props.textMessageData.count}件のメッセージ</CaptionTitle>
        <ViewAll href={`/projects/${project_id}/text_messages`} />
      </ItemsCaption>

      <TextMessageContainer>
        {props.textMessageData.items.map((messageData, i) => {
          return (
            <TextMessageUnit key={i}>
              <Message>{messageData.text}</Message>
              <SenderName>{messageData.sender_name}</SenderName>
            </TextMessageUnit>
          );
        })}
      </TextMessageContainer>
    </Container>
  );
};

const Container = styled("div", {
  width: "100%",
});

const ItemsCaption = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  margin: "32px 0 0",
});

const CaptionTitle = styled("h2", {
  fontWeight: "700",
  fontSize: "16px",
  color: "$textPrimary",
  margin: "0",
});
