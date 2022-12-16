import { GetServerSideProps, NextPage } from "next";

import { SpotifyMusic } from "../../../common/spotifyMusic/type";
import { authenticate } from "../../../common/spotifyMusic/utils/authenticate";
import { SpotifyMusicPage } from "../../../project/spotifyMusic/SpotifyMusicPage";
import { getProject } from "../../../utils/apis";
import { GeneralPageProps } from "../../_app";

type Props = {
  spotifyMusic: SpotifyMusic;
} & GeneralPageProps;

const Page: NextPage<Props> = (props) => {
  return <SpotifyMusicPage {...props} />;
};

export default Page;
export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const { project_id } = ctx.query;
  const project = await getProject(project_id as string);
  const spotifyApiAccessToken = await authenticate();

  return {
    props: {
      spotifyMusic: project.spotify_music,
      spotifyApiAccessToken,
    },
  };
};
