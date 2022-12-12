import { GetServerSideProps, NextPage } from "next";

// TODO: TopPageを実装する
const Page: NextPage<{}> = (props) => {
  return <div {...props} />;
};

export default Page;

export const getStaticProps: GetServerSideProps<{}> = async (ctx) => {
  return {
    props: {},
  };
};
