import { GetServerSideProps, NextPage } from "next";

import { authenticate } from "../../../common/spotifyMusic/utils/authenticate";
import { SpotifyMusicPage } from "../../../project/spotifyMusic/SpotifyMusicPage";
import { Project } from "../../../project/type";
import { getProject } from "../../../utils/apis";
import { GeneralPageProps } from "../../_app";

type Props = {
  project: Project;
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
      project,
      spotifyApiAccessToken,
    },
  };
};
