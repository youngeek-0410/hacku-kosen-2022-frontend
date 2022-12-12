import React, { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";
import { NextPage } from "next";

import { SpotifyApiAccessToken } from "../common/spotifyMusic/type";
import { SpotifyApiAccessTokenProvider } from "../common/spotifyMusic/contexts/SpotifyApiAuthProvider";

export type GeneralPageProps = { spotifyApiAccessToken: SpotifyApiAccessToken };
export type NextLayout = (page: ReactElement) => ReactNode;
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: NextLayout;
};

type AppPropsWithLayout<P> = AppProps<P> & {
  Component: NextPageWithLayout<P>;
};
const App = ({ Component, pageProps }: AppPropsWithLayout<GeneralPageProps>) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <SpotifyApiAccessTokenProvider accessToken={pageProps.spotifyApiAccessToken}>
      <Component {...pageProps} />
    </SpotifyApiAccessTokenProvider>
  );
};

export default App;
