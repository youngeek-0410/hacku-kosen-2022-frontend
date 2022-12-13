import axios, { AxiosRequestConfig } from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { backendApiUrl } from "../../api";
import { styled } from "../stitches.config";

import { TextMessage } from "./type";

type GetTextMessagesRequest = {
  limit: 100;
};

type GetTextMessagesResponse = {
  count: number;
  items: TextMessage[];
};

type Props = {
  count: number;
  items: TextMessage[];
};

export const getTextMessages = async (project_id: string): Promise<GetTextMessagesResponse> => {
  const params: GetTextMessagesRequest = {
    limit: 100,
  };

  const requestConfig: AxiosRequestConfig = {
    url: `${backendApiUrl}/api/projects/${project_id}/text_messages/`,
    method: "GET",
    params: {
      params,
    },
  };

  const { data, status } = await axios.request<GetTextMessagesResponse>(requestConfig);
  if (status !== 200) throw new Error("failed to get messages");
  return data;
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
