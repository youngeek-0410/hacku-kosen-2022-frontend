import React from "react";

import { styled } from "../../stitches.config";
import { TextMessage } from "../type";

export const TextMessageItem: React.FC<{ messageData: TextMessage }> = (props) => {
  return (
    <TextMessageUnit>
      <Message>{props.messageData.text}</Message>
      <SenderName>{props.messageData.sender_name}</SenderName>
    </TextMessageUnit>
  );
};

const TextMessageUnit = styled("div", {
  width: "100%",
  background: "$messegeBackground",
  margin: "0 auto 8px",
  textAlign: "center",
});

const Message = styled("p", {
  fontSize: "12px",
  color: "$textSecondary",
  padding: "8px",
  margin: "0",
  textAlign: "left",
});

const SenderName = styled("p", {
  fontSize: "12px",
  color: "$textSecondary",
  textAlign: "right",
  padding: "0 8px 8px",
  margin: "0",
});
