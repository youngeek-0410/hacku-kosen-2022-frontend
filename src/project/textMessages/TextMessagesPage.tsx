import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";

import { styled } from "../../stitches.config";
import { TextMessageItem } from "../common/TextMessageItem";
import { TextMessage } from "../type";

type Props = {
  count: number;
  items: TextMessage[];
};

export const TextMessagesPage: React.FC<Props> = (props) => {
  const router = useRouter();
  const { project_id } = router.query;
  return (
    <Container>
      <Headline>
        <BackButton
          href={{
            pathname: "/projects/[project_id]",
            query: { project_id: project_id },
          }}
        >
          <IconWrapper>
            <IoChevronBackOutline color="#1C1B1A" size={20} />
          </IconWrapper>
        </BackButton>
        <Title>{props.count}件のメッセージ</Title>
      </Headline>
      <TextMessageContainer>
        {props.items.map((textMessageData, i) => {
          return <TextMessageItem key={i} messageData={textMessageData} />;
        })}
      </TextMessageContainer>
    </Container>
  );
};

const Container = styled("div", {
  width: "80%",
  margin: "0 auto",
});

const Headline = styled("div", {
  width: "100%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
});

const Title = styled("p", {
  fontSize: "24px",
  fontWeight: "700",
  color: "$textPrimary",
});

const IconWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
});

const BackButton = styled(Link, {
  width: "30px",
});

export const TextMessageContainer = styled("div", {
  width: "100%",
  margin: "0 auto",
});

export const TextMessageUnit = styled("div", {
  width: "100%",
  background: "$messegeBackground",
  margin: "0 auto 8px",
  textAlign: "center",
});

export const Message = styled("p", {
  fontSize: "12px",
  color: "$textSecondary",
  padding: "8px",
  margin: "0",
  textAlign: "left",
});

export const SenderName = styled("p", {
  fontSize: "12px",
  color: "$textSecondary",
  textAlign: "right",
  padding: "0 8px 8px",
  margin: "0",
});
