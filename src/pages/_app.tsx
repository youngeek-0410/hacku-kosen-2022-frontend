import React, { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";
import { NextPage } from "next";

import { SpotifyApiAccessToken } from "../common/spotifyMusic/type";
import { SpotifyApiAccessTokenProvider } from "../common/spotifyMusic/contexts/SpotifyApiAuthProvider";
import { setupMockServer, setupMockWorker } from "../mocks/mock";

export type GeneralPageProps = { spotifyApiAccessToken?: SpotifyApiAccessToken };
export type NextLayout = (page: ReactElement) => ReactNode;
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: NextLayout;
};

type AppPropsWithLayout<P> = AppProps<P> & {
  Component: NextPageWithLayout<P>;
};

if (process.env.NODE_ENV === "development") {
  if (typeof window === "undefined") {
    const m = setupMockServer();
    m.listen();
  } else {
    const m = setupMockWorker();
    m.start();
  }
}

const App = ({ Component, pageProps }: AppPropsWithLayout<GeneralPageProps>) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <SpotifyApiAccessTokenProvider accessToken={pageProps.spotifyApiAccessToken || ""}>
      <Component {...pageProps} />
    </SpotifyApiAccessTokenProvider>
  );
};

export default App;
