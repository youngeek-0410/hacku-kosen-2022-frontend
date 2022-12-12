import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { styled } from "../../stitches.config";

import { BrowseMessage } from "./BrowseMessage";
import { CopyProjectLink } from "./CopyProjectLink";
import { MusicEdit } from "./MusicEdit";

// API call
const getReceiverName = () => {
  return "山田 太郎";
};

export const ProjectDetailPage: React.FC = () => {
  const router = useRouter();
  const { project_id } = router.query;
  const receiverName = getReceiverName();

  return (
    <>
      <ReceiverName>{receiverName}さんへの色紙</ReceiverName>
      <CopyProjectLink />
      <MusicEdit />
      <BrowseMessage />
      <NewMessageLink
        href={{
          pathname: "/projects/[project_id]/new_message",
          query: { project_id: project_id },
        }}
      >
        思いをとどける
      </NewMessageLink>
    </>
  );
};

const ReceiverName = styled("h2", {});

const NewMessageLink = styled(Link, {
  display: "block",
  margin: "0 auto",
});
