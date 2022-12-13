import { GetServerSideProps, NextPage } from "next";

import { NewProjectPage } from "../projects/NewProjectPage";

const Page: NextPage = (props) => {
  return <NewProjectPage {...props} />;
};

export default Page;

export const getServerSideProps: GetServerSideProps<{}> = async (ctx) => {
  return {
    props: {},
  };
};
