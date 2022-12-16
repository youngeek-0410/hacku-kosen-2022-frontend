import { GetServerSideProps, NextPage } from "next";

import { NewMessagePage } from "../../../project/newMessage/NewMessagePage";
import { Project } from "../../../project/type";
import { getProject } from "../../../utils/apis";

type Props = {
  project: Project;
};

const Page: NextPage<Props> = (props) => {
  return <NewMessagePage {...props} />;
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
