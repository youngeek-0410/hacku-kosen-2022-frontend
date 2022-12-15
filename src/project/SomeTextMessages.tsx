import { useRouter } from "next/router";
import React from "react";

import { ProjectHeading3 } from "./common/ProjectHeading3";
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
    <div>
      <ProjectHeading3 viewAllLink={`/projects/${project_id}/text_messages`}>
        {props.textMessageData.count}件のメッセージ
      </ProjectHeading3>

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
    </div>
  );
};
