import { GetServerSideProps, NextPage } from "next";

import { TextMessagesPage } from "../../../projects/TextMessagesPage";

const Page: NextPage<{}> = (props) => {
  return <TextMessagesPage {...props} />;
};

export default Page;

export const getServerSideProps: GetServerSideProps<{}> = async (ctx) => {
  return {
    props: {},
  };
};
