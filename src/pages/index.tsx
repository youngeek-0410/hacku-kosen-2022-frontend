import { GetServerSideProps, NextPage } from "next";

import { App } from "../App";

const Home: NextPage<{}> = (props) => {
  return <App {...props} />;
};

export default Home;

export const getStaticProps: GetServerSideProps<{}> = async (ctx) => {
  return {
    props: {},
  };
};
