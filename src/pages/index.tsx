import { GetServerSideProps, NextPage } from "next";

import { TopPage } from "../projects/TopPage";

// TODO: TopPageを実装する
const Page: NextPage<{}> = (props) => {
  return <TopPage {...props} />;
};

export default Page;

export const getStaticProps: GetServerSideProps<{}> = async (ctx) => {
  return {
    props: {},
  };
};
