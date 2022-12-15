import axios, { AxiosRequestConfig } from "axios";
import { GetServerSideProps, NextPage } from "next";

import { backendApiUrl, getBackendApiKey } from "../../../../api";
import { TextMessagesPage } from "../../../projects/TextMessagesPage";
import { TextMessage } from "../../../projects/type";

type Props = {
  count: number;
  items: TextMessage[];
};

const Page: NextPage<Props> = (props) => {
  return <TextMessagesPage {...props} />;
};

export default Page;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const { project_id } = ctx.query;
  if (typeof project_id !== "string") {
    return {
      notFound: true,
    };
  }

  const { count, items } = await getTextMessages(project_id);
  return {
    props: {
      count,
      items,
    },
  };
};

type GetTextMessagesRequest = {
  limit?: number;
};

type GetTextMessagesResponse = {
  count: number;
  items: TextMessage[];
};

const getTextMessages = async (project_id: string): Promise<GetTextMessagesResponse> => {
  const params: GetTextMessagesRequest = {
    limit: 100, // NOTE: 100という数字は適当
  };

  const requestConfig: AxiosRequestConfig<GetTextMessagesRequest> = {
    url: `${backendApiUrl}/api/projects/${project_id}/text_messages/`,
    method: "GET",
    params,
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
      "x-api-key": getBackendApiKey(),
    },
  };
  const { data, status } = await axios.request<GetTextMessagesResponse>(requestConfig);
  if (status !== 200) throw new Error("failed to get messages");
  return data;
};
