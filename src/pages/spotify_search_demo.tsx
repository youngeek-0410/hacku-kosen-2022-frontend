import { GetServerSideProps, NextPage } from "next";

import { authenticate } from "../common/spotifyMusic/utils/authenticate";
import { SpotifyApiAccessTokenProvider } from "../common/spotifyMusic/contexts/SpotifyApiAuthProvider";
import { SpotifyMusicSearch } from "../common/spotifyMusic/components/SpotifyMusicSearch";
import { SpotifyApiAccessToken } from "../common/spotifyMusic/type";

type Props = {
  spotifyApiAccessToken: SpotifyApiAccessToken;
};
const Page: NextPage<Props> = (props) => {
  return (
    <SpotifyApiAccessTokenProvider accessToken={props.spotifyApiAccessToken}>
      <SpotifyMusicSearch />
    </SpotifyApiAccessTokenProvider>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const spotifyApiAccessToken = await authenticate();
  return {
    props: {
      spotifyApiAccessToken,
    },
  };
};
