import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { styled } from "../../stitches.config";
import { SectionTitle } from "../NewMessagePage";
import { ImageMessage, TextMessage } from "../type";

type Props = {
  textMessageData: {
    count: number;
    items: TextMessage[];
  };
  imageMessageData: {
    count: number;
    items: ImageMessage[];
  };
};

export const ProjectTopMessages: React.FC<Props> = (props) => {
  const router = useRouter();
  const project_id = router.query.project_id;

  return (
    <>
      <SectionTitle>{props.textMessageData.count}件のメッセージ</SectionTitle>
      <BrowseAllLink href={`/projects/${project_id}/text_messages`}>すべて見る</BrowseAllLink>
      {props.textMessageData.items.map((messageData, i) => {
        return (
          <div key={i}>
            <p>{messageData.text}</p>
            <p>{messageData.sender_name}</p>
          </div>
        );
      })}
      <SectionTitle>{props.imageMessageData.count}枚の写真</SectionTitle>
      <BrowseAllLink href={`/projects/${project_id}/image_messages`}>すべて見る</BrowseAllLink>
      {props.imageMessageData.items.map((imageData, i) => {
        return (
          <div key={i}>
            <img src={imageData.url} alt="picture sent" width={50} height={50} />
          </div>
        );
      })}
    </>
  );
};

export const BrowseAllLink = styled(Link, {});
