import React from "react";

import { styled } from "../stitches.config";

import { TextMessageItem } from "./common/TextMessageItem";
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
        return <TextMessageItem key={i} messageData={messageData} />;
      })}
    </Base>
  );
};

const Base = styled("div", {
  marginTop: "8px",
});
