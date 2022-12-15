import { GetServerSideProps, NextPage } from "next";

import { NewMessagePage } from "../../../project/newMessage/NewMessagePage";

const Page: NextPage<{}> = (props) => {
  return <NewMessagePage {...props} />;
};

export default Page;

export const getServerSideProps: GetServerSideProps<{}> = async (ctx) => {
  return {
    props: {},
  };
};
