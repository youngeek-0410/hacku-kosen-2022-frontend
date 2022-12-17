import React from "react";

import { TextMessageItem } from "./common/TextMessageItem";
import { TextMessage } from "./type";

type Props = {
  textMessageData: {
    count: number;
    items: TextMessage[];
  };
};

export const SomeTextMessages: React.FC<Props> = (props) => {
  const textMessages = props.textMessageData.items.slice(0, 3);
  return (
    <>
      {textMessages.map((messageData, i) => {
        return <TextMessageItem key={i} messageData={messageData} />;
      })}
    </>
  );
};
