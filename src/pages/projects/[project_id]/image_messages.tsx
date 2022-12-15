import { GetServerSideProps, NextPage } from "next";

import { getImageMessages } from "../../../utils/apis";
import { ImageMessagesPage } from "../../../projects/ImageMessagesPage";
import { ImageMessage } from "../../../projects/type";

type Props = {
  count: number;
  items: ImageMessage[];
};

const Page: NextPage<Props> = (props) => {
  return <ImageMessagesPage {...props} />;
};

export default Page;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const { project_id } = ctx.query;

  const { count, items } = await getImageMessages(project_id as string);
  return {
    props: {
      count,
      items,
    },
  };
};
