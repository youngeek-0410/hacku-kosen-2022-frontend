import { GetServerSideProps, NextPage } from "next";

import { ImageMessagesPage } from "../../../projects/ImageMessagesPage";

const Page: NextPage<{}> = (props) => {
  return <ImageMessagesPage {...props} />;
};

export default Page;

export const getServerSideProps: GetServerSideProps<{}> = async (ctx) => {
  return {
    props: {},
  };
};
