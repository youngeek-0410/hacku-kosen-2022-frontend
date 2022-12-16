import { GetServerSideProps, NextPage } from "next";

import { getProject } from "../../../utils/apis";
import { Project } from "../../../project/type";
import { TopTextPage } from "../../../project/topText/TopTextPage";

type Props = {
  project: Project;
};

const Page: NextPage<Props> = (props) => {
  return <TopTextPage {...props} />;
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
