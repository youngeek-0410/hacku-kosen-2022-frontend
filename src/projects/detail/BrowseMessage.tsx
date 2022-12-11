import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { styled } from "../../stitches.config";
import { SectionTitle } from "../NewMessagePage";

const getTextCount = () => {
  return 10;
};

const getImageCount = () => {
  return 15;
};

export const BrowseMessage: React.FC = () => {
  const router = useRouter();
  const project_id = router.query.project_id;

  const textCount = getTextCount();
  const imageCount = getImageCount();

  return (
    <>
      <SectionTitle>{textCount}件のメッセージ</SectionTitle>
      <BrowseAllLink href={`/projects/${project_id}/text_messages`}>すべて見る</BrowseAllLink>
      <Messages></Messages>
      <SectionTitle>{imageCount}枚の写真</SectionTitle>
      <BrowseAllLink href={`/projects/${project_id}/image_messages`}>すべて見る</BrowseAllLink>
    </>
  );
};

const Messages = styled("div", {});

export const BrowseAllLink = styled(Link, {});
