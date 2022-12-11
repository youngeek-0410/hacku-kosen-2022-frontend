import { useRouter } from "next/router";
import React from "react";

import { styled } from "../stitches.config";

const getCount = () => {
  return 10;
};

export const TextMessagesPage: React.FC = () => {
  const router = useRouter();
  const { project_id } = router.query;

  const onClick = () => {
    router.push(`/projects/${project_id}`);
  };

  const count = getCount();

  return (
    <>
      <BackButton onClick={onClick}>もどる</BackButton>
      <Title>{count}件のメッセージ</Title>
      <Texts></Texts>
    </>
  );
};

const Title = styled("h2", {});

const Texts = styled("div", {});

const BackButton = styled("button", {});
