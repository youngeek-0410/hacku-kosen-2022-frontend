import { GetServerSideProps, NextPage } from "next";

import { authenticate } from "../../../common/spotifyMusic/utils/authenticate";
import { ProjectDetailPage } from "../../../projects/detail/ProjectDetailPage";
import { GeneralPageProps } from "../../_app";
import { Project } from "../../../projects/type";
import { getProject } from "../../../utils/apis";

type Props = {
  project: Project;
} & GeneralPageProps;

const Page: NextPage<Props> = (props) => {
  return <ProjectDetailPage {...props} />;
};

export default Page;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const spotifyApiAccessToken = await authenticate();
  const { project_id } = ctx.query;
  const project = await getProject(project_id as string);

  return {
    props: {
      spotifyApiAccessToken,
      project,
    },
  };
};
