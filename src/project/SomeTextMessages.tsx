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
  return (
    <>
      {props.textMessageData.items.map((messageData, i) => {
        return <TextMessageItem key={i} messageData={messageData} />;
      })}
    </>
  );
};
