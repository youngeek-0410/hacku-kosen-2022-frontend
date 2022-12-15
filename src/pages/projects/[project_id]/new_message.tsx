import { GetServerSideProps, NextPage } from "next";

import { NewMessagePage } from "../../../newMessage/NewMessagePage";

const Page: NextPage<{}> = (props) => {
  return <NewMessagePage {...props} />;
};

export default Page;

export const getServerSideProps: GetServerSideProps<{}> = async (ctx) => {
  return {
    props: {},
  };
};
