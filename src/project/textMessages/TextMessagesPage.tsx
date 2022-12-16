import React from "react";

import { styled } from "../../stitches.config";
import { Headline } from "../common/Headline";
import { TextMessageItem } from "../common/TextMessageItem";
import { TextMessage } from "../type";

type Props = {
  count: number;
  items: TextMessage[];
};

export const TextMessagesPage: React.FC<Props> = (props) => {
  return (
    <Container>
      <Headline title={`${props.count}件のメッセージ`} />
      <div>
        {props.items.map((textMessageData, i) => {
          return <TextMessageItem key={i} messageData={textMessageData} />;
        })}
      </div>
    </Container>
  );
};

const Container = styled("div", {
  width: "80%",
  margin: "0 auto",
});

export const TextMessageUnit = styled("div", {
  background: "$messegeBackground",
  margin: "0 auto 8px",
  textAlign: "center",
});

export const Message = styled("p", {
  fontSize: "12px",
  padding: "8px",
  margin: "0",
});

export const SenderName = styled("p", {
  fontSize: "12px",
  textAlign: "right",
  padding: "0 8px 8px",
  margin: "0",
});
