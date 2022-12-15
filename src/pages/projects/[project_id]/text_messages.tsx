import { GetServerSideProps, NextPage } from "next";

import { getTextMessages } from "../../../utils/apis";
import { TextMessagesPage } from "../../../projects/TextMessagesPage";
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

  const { count, items } = await getTextMessages(project_id as string);
  return {
    props: {
      count,
      items,
    },
  };
};
