import { GetServerSideProps, NextPage } from "next";

import { authenticate } from "../../../common/spotifyMusic/utils/authenticate";
import { ProjectDetailPage } from "../../../projects/detail/ProjectDetailPage";
import { GeneralPageProps } from "../../_app";
import { getProjectData } from "../../../projects/detail/ProjectDetailPage";
import { Project } from "../../../projects/type";

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
  if (typeof project_id !== "string") {
    return {
      notFound: true,
    };
  }

  const project = await getProjectData(project_id);
  return {
    props: {
      spotifyApiAccessToken,
      project,
    },
  };
};
