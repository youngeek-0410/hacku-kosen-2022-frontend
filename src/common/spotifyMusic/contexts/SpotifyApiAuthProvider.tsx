import React, { createContext, useContext } from "react";

import { SpotifyApiAccessToken } from "../type";

export const SpotifyApiAccessTokenContext = createContext<SpotifyApiAccessToken | null>(null);

export const SpotifyApiAccessTokenProvider: React.FC<{ accessToken: SpotifyApiAccessToken }> = ({
  accessToken,
  children,
}) => {
  return <SpotifyApiAccessTokenContext.Provider value={accessToken}>{children}</SpotifyApiAccessTokenContext.Provider>;
};

export const useSpotifyApiAccessToken = () => {
  const context = useContext(SpotifyApiAccessTokenContext);
  if (!context) {
    throw new Error("useSpotifyApiAccessTokenProvider should use inner SoptifyApiAccessTokenProvider");
  }
  return context;
};
