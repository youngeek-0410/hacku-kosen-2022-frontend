import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { styled } from "../stitches.config";

import { ImageMessage } from "./type";

type Props = {
  count: number;
  items: ImageMessage[];
};

export const ImageMessagesPage: React.FC<Props> = (props) => {
  const router = useRouter();
  const { project_id } = router.query;
  return (
    <>
      <BackButton
        href={{
          pathname: "/projects/[project_id]",
          query: { project_id: project_id },
        }}
      >
        もどる
      </BackButton>
      <Title>{props.count}件の写真</Title>
      {props.items.map((imageMessageData, i) => {
        return <img key={i} src={imageMessageData.url} alt="picture sent" />;
      })}
    </>
  );
};

const Title = styled("h2", {});

const BackButton = styled(Link, {});
