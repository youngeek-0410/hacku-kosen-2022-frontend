import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { styled } from "../stitches.config";

const getCount = () => {
  return 10;
};

export const TextMessagesPage: React.FC = () => {
  const router = useRouter();
  const { project_id } = router.query;

  const count = getCount();

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
      <Title>{count}件のメッセージ</Title>
      <div></div>
    </>
  );
};

const Title = styled("h2", {});

const BackButton = styled(Link, {});
