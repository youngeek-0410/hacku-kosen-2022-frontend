import { GetServerSideProps, NextPage } from "next";

import { NewMessagePage } from "../projects/NewMessagePage";

const Page: NextPage<{}> = (props) => {
  return <NewMessagePage {...props} />;
};

export default Page;

export const getServerSideProps: GetServerSideProps<{}> = async (ctx) => {
  return {
    props: {},
  };
};
