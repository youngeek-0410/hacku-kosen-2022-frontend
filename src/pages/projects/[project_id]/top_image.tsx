import { GetServerSideProps, NextPage } from "next";

import { getProject } from "../../../utils/apis";
import { Project } from "../../../project/type";
import { TopImagePage } from "../../../project/topImage/TopImagePage";

type Props = {
  project: Project;
};

const Page: NextPage<Props> = (props) => {
  return <TopImagePage {...props} />;
};

export default Page;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const { project_id } = ctx.query;

  const project = await getProject(project_id as string);
  return {
    props: {
      project,
    },
  };
};
