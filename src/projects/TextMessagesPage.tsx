import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { styled } from "../stitches.config";

import { TextMessage } from "./type";

type Props = {
  count: number;
  items: TextMessage[];
};

export const TextMessagesPage: React.FC<Props> = (props) => {
  const router = useRouter();
  const { project_id } = router.query;
  return (
    <>
      <BackButton
        href={{
          pathname: "/projects/[project_id]",
          query: { project_id: project_id },
        }}
      >
        もどる
      </BackButton>
      <Title>{props.count}件のメッセージ</Title>
      {props.items.map((textMessageData, i) => {
        return (
          <div key={i}>
            <p>{textMessageData.text}</p>
            <p>{textMessageData.sender_name}</p>
          </div>
        );
      })}
    </>
  );
};

const Title = styled("h2", {});

const BackButton = styled(Link, {});
