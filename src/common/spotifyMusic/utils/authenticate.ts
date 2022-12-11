import axios, { AxiosRequestConfig } from "axios";

import { SpotifyApiAccessToken } from "../type";

export const authSpotifyApiUrl = "https://accounts.spotify.com/api/token";

type SpotifyApiAuthRequest = {
  grant_type: "client_credentials";
};

type SpotifyApiAuthResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

export const authenticate = async (): Promise<SpotifyApiAccessToken> => {
  const requestConfig: AxiosRequestConfig<SpotifyApiAuthRequest> = {
    url: authSpotifyApiUrl,
    method: "POST",
    headers: {
      Authorization: `Basic ${getClientCredentials()}`,
      "content-type": "application/x-www-form-urlencoded",
    },
    data: {
      grant_type: "client_credentials",
    },
  };

  const { data, status } = await axios.request<SpotifyApiAuthResponse>(requestConfig);
  if (status !== 200) throw new Error("failed to authenticate spotify api");

  return data.access_token;
};

const getClientCredentials = () => {
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_API_CLIENT_ID || "test client id";
  const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_API_CLIENT_SECRET || "test client secret";
  if (!(clientId && clientSecret)) throw new Error("failed to get spotify api credentials");

  return Buffer.from(clientId + ":" + clientSecret).toString("base64");
};
