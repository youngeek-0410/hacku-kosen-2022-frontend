import axios, { AxiosRequestConfig } from "axios";
import { GetServerSideProps, NextPage } from "next";

import { backendApiUrl, getBackendApiKey } from "../../../../api";
import { ImageMessagesPage } from "../../../projects/ImageMessagesPage";
import { ImageMessage } from "../../../projects/type";

type Props = {
  count: number;
  items: ImageMessage[];
};

const Page: NextPage<Props> = (props) => {
  return <ImageMessagesPage {...props} />;
};

export default Page;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const { project_id } = ctx.query;
  if (typeof project_id !== "string") {
    return {
      notFound: true,
    };
  }

  const { count, items } = await getImageMessages(project_id);
  return {
    props: {
      count,
      items,
    },
  };
};

type GetImageMessagesRequest = {
  limit?: number;
};

type GetImageMessagesResponse = {
  count: number;
  items: ImageMessage[];
};

const getImageMessages = async (project_id: string): Promise<GetImageMessagesResponse> => {
  const params: GetImageMessagesRequest = {
    limit: 100, // NOTE: 100という数字は適当
  };

  const requestConfig: AxiosRequestConfig<GetImageMessagesRequest> = {
    url: `${backendApiUrl}/api/projects/${project_id}/image_messages/`,
    method: "GET",
    params,
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
      "x-api-key": getBackendApiKey(),
    },
  };

  const { data, status } = await axios.request<GetImageMessagesResponse>(requestConfig);
  if (status !== 200) throw new Error("failed to get images");
  return data;
};
