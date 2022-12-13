import { GetServerSideProps, NextPage } from "next";

import { getTextMessages, TextMessagesPage } from "../../../projects/TextMessagesPage";
import { TextMessage } from "../../../projects/type";

type Props = {
  count: number;
  items: TextMessage[];
};

const Page: NextPage<Props> = (props) => {
  return <TextMessagesPage {...props} />;
};

export default Page;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const { project_id } = ctx.query;
  if (typeof project_id !== "string") {
    return {
      notFound: true,
    };
  }

  const { count, items } = await getTextMessages(project_id);
  return {
    props: {
      count,
      items,
    },
  };
};
