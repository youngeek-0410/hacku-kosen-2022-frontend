import { GetServerSideProps, NextPage } from "next";

import { authenticate } from "../common/spotifyMusic/utils/authenticate";
import { SpotifyMusicSearch } from "../common/spotifyMusic/components/SpotifyMusicSearch";
import { SpotifyApiAccessToken } from "../common/spotifyMusic/type";

type Props = {
  spotifyApiAccessToken: SpotifyApiAccessToken;
};
const Page: NextPage<Props> = (props) => {
  return <SpotifyMusicSearch />;
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
