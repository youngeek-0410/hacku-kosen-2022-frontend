import { GetServerSideProps, NextPage } from "next";

import { ProjectDetailPage } from "../../../projects/detail/ProjectDetailPage";

const Page: NextPage<{}> = (props) => {
  return <ProjectDetailPage {...props} />;
};

export default Page;

export const getServerSideProps: GetServerSideProps<{}> = async (ctx) => {
  return {
    props: {},
  };
};
