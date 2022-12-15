import React from "react";

import { Message, SenderName, TextMessageContainer, TextMessageUnit } from "./textMessages/TextMessagesPage";
import { TextMessage } from "./type";

type Props = {
  textMessageData: {
    count: number;
    items: TextMessage[];
  };
};

export const SomeTextMessages: React.FC<Props> = (props) => {
  return (
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
  );
};
