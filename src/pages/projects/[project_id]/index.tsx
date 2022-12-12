import { GetServerSideProps, NextPage } from "next";

import { authenticate } from "../../../common/spotifyMusic/utils/authenticate";
import { ProjectDetailPage } from "../../../projects/detail/ProjectDetailPage";
import { GeneralPageProps } from "../../_app";

const Page: NextPage<{}> = (props) => {
  return <ProjectDetailPage {...props} />;
};

export default Page;

export const getServerSideProps: GetServerSideProps<GeneralPageProps> = async (ctx) => {
  const spotifyApiAccessToken = await authenticate();
  return {
    props: {
      spotifyApiAccessToken,
    },
  };
};
