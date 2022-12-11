import axios, { AxiosRequestConfig } from "axios";

export const authUrl = "https://accounts.spotify.com/api/token";

type SpotifyApiAuthRequest = {
  grant_type: "client_credentials";
};

type SpotifyApiAuthResponse = {
  data: {
    access_token: string;
    token_type: string;
    expires_in: number;
  };
  status: number;
};

type AccessToken = string;

export const authenticate = async (): Promise<AccessToken> => {
  const reqBody: SpotifyApiAuthRequest = {
    grant_type: "client_credentials",
  };
  const authOptions: AxiosRequestConfig = {
    method: "POST",
    headers: {
      Authorization: `Basic ${getClientCredentials()}`,
      "content-type": "application/x-www-form-urlencoded",
    },
  };

  const { data, status } = await axios.post<SpotifyApiAuthRequest, SpotifyApiAuthResponse>(
    authUrl,
    reqBody,
    authOptions
  );
  if (status !== 200) throw new Error("failed to authenticate spotify api");

  return data.access_token;
};

const getClientCredentials = () => {
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_API_CLIENT_ID || "test client id";
  const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_API_CLIENT_SECRET || "test client secret";
  if (!(clientId && clientSecret)) throw new Error("failed to get spotify api credentials");

  return Buffer.from(clientId + ":" + clientSecret).toString("base64");
};
