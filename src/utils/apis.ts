import axios, { AxiosRequestConfig } from "axios";

import { Base64 } from "../common/imageEncoder";
import { ImageMessage, Project, TextMessage } from "../project/type";

export const backendApiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL || "http://localhost:8000";

const backendApiClient = axios.create({
  baseURL: backendApiUrl,
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
    "x-api-key": process.env.NEXT_PUBLIC_BACKEND_API_KEY,
  },
});

type GetProjectDataRequest = {
  text_message_limit: 3;
  image_message_limit: number;
};

type GetProjectDataResponse = Project;

export const getProject = async (project_id: string): Promise<GetProjectDataResponse> => {
  const params: GetProjectDataRequest = {
    text_message_limit: 3,
    image_message_limit: 3,
  };

  const requestConfig: AxiosRequestConfig = { params };
  const { data, status } = await backendApiClient.get<GetProjectDataResponse>(
    `/api/projects/${project_id}/`,
    requestConfig
  );
  if (status !== 200) throw new Error("failed to get project data");
  return data;
};

type GetImageMessagesRequest = {
  limit?: number;
};

type GetImageMessagesResponse = {
  count: number;
  items: ImageMessage[];
};

export const getImageMessages = async (project_id: string): Promise<GetImageMessagesResponse> => {
  const params: GetImageMessagesRequest = {
    limit: 100, // NOTE: 100という数字は適当
  };

  const requestConfig: AxiosRequestConfig<GetImageMessagesRequest> = { params };

  const { data, status } = await backendApiClient.get<GetImageMessagesResponse>(
    `/api/projects/${project_id}/image_messages/`,
    requestConfig
  );
  if (status !== 200) throw new Error("failed to get images");
  return data;
};

type GetTextMessagesRequest = {
  limit?: number;
};

type GetTextMessagesResponse = {
  count: number;
  items: TextMessage[];
};

export const getTextMessages = async (project_id: string): Promise<GetTextMessagesResponse> => {
  const params: GetTextMessagesRequest = {
    limit: 100, // NOTE: 100という数字は適当
  };

  const requestConfig: AxiosRequestConfig<GetTextMessagesRequest> = { params };
  const { data, status } = await backendApiClient.get<GetTextMessagesResponse>(
    `/api/projects/${project_id}/text_messages/`,
    requestConfig
  );
  if (status !== 200) throw new Error("failed to get messages");
  return data;
};

type CreateProjectRequest = {
  receiver_name: string;
};

type CreateProjectResponse = {
  project_id: string;
};

export const createProject = async (receiverName: string): Promise<string> => {
  const body: CreateProjectRequest = {
    receiver_name: receiverName,
  };
  const { data, status } = await backendApiClient.post<CreateProjectResponse>("/api/projects/", body);
  if (status !== 200) throw new Error("failed to create project");
  return data.project_id;
};

type CreateProjectMessageRequest = {
  text: string;
  images: Base64;
  sender_name: string;
};

export const createMessage = async (
  projectId: string,
  text: string,
  imageData: Base64,
  senderName: string
): Promise<void> => {
  const body: CreateProjectMessageRequest = {
    text,
    images: imageData,
    sender_name: senderName,
  };

  const { status } = await backendApiClient.post(`/api/projects/${projectId}/message/`, body);
  if (status !== 200) throw new Error("failed to create message");

  return;
};
