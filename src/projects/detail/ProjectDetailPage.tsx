import React from "react";
import { useRouter } from "next/router";

import { styled } from "../../stitches.config";

import { BrowseImage } from "./BrowseImage";
import { BrowseMessage } from "./BrowseMessage";
import { EditProjectLink } from "./EditProjectLink";
import { MusicEdit } from "./MusicEdit";

// API call
const getReceiverName = () => {
  return "山田 太郎";
};

export const ProjectDetailPage: React.FC = () => {
  const router = useRouter();
  const { project_id } = router.query;
  const receiverName = getReceiverName();

  const moveNewMessage = () => {
    router.push(`/projects/${project_id}/new_message`);
  };

  return (
    <>
      <ReceiverName>{receiverName}さんへの色紙</ReceiverName>
      <EditProjectLink></EditProjectLink>
      <MusicEdit></MusicEdit>
      <BrowseMessage></BrowseMessage>
      <BrowseImage></BrowseImage>
      <NewMessageButton onClick={moveNewMessage}>思いをとどける</NewMessageButton>
    </>
  );
};

const ReceiverName = styled("h2", {});

const NewMessageButton = styled("button", {
  display: "block",
  margin: "0 auto",
});
