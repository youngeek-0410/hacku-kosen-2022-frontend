import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios, { AxiosRequestConfig } from "axios";

import { styled } from "../../stitches.config";
import { backendApiUrl } from "../../../api";
import { Project } from "../type";

import { ProjectTopMessages } from "./ProjectTopMessages";
import { CopyProjectLink } from "./CopyProjectLink";
import { MusicEdit } from "./MusicEdit";

type GetProjectDataRequest = {
  text_message_limit: 3;
  image_message_limit: number;
};

type GetProjectDataResponse = Project;

type Props = {
  project: Project;
};

export const getProjectData = async (project_id: string): Promise<GetProjectDataResponse> => {
  const params: GetProjectDataRequest = {
    text_message_limit: 3,
    image_message_limit: 5,
  };

  const requestConfig: AxiosRequestConfig = {
    url: `${backendApiUrl}/api/projects/${project_id}/`,
    method: "GET",
    params: {
      params,
    },
  };

  const { data, status } = await axios.request<GetProjectDataResponse>(requestConfig);
  if (status !== 200) throw new Error("failed to get project data");
  return data;
};

export const ProjectDetailPage: React.FC<Props> = (props) => {
  console.log(props.project);
  const router = useRouter();
  const { project_id } = router.query;

  const messageData = {
    textMessageData: props.project.text_messages,
    imageMessageData: props.project.image_messages,
  };

  return (
    <>
      <ReceiverName>{props.project.receiver_name}さんへの色紙</ReceiverName>
      <CopyProjectLink />
      <MusicEdit />
      <ProjectTopMessages {...messageData} />
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
