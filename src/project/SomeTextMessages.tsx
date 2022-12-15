import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

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
        <BrowseAllLink href={`/projects/${project_id}/text_messages`}>
          <LinkText>すべて見る</LinkText>
          <LinkIcon>
            <IoChevronForwardOutline />
          </LinkIcon>
        </BrowseAllLink>
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

const BrowseAllLink = styled(Link, {
  color: "$yellow900",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  textDecoration: "none",
});

const LinkText = styled("p", {
  fontWeight: "700",
  fontSize: "12px",
  paddingRight: "4px",
  margin: "0",
});

const LinkIcon = styled("div", {
  display: "flex",
});
