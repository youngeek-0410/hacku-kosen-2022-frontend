import React from "react";

import { styled } from "../stitches.config";

import { Message, SenderName, TextMessageUnit } from "./textMessages/TextMessagesPage";
import { TextMessage } from "./type";

type Props = {
  textMessageData: {
    count: number;
    items: TextMessage[];
  };
};

export const SomeTextMessages: React.FC<Props> = (props) => {
  return (
    <Base>
      {props.textMessageData.items.map((messageData, i) => {
        return (
          <TextMessageUnit key={i}>
            <Message>{messageData.text}</Message>
            <SenderName>{messageData.sender_name}</SenderName>
          </TextMessageUnit>
        );
      })}
    </Base>
  );
};

const Base = styled("div", {
  marginTop: "8px",
});
