import { useRouter } from "next/router";
import React from "react";

import { styled } from "../stitches.config";

const getCount = () => {
  return 15;
};

export const ImageMessagesPage: React.FC = () => {
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
      <Images></Images>
    </>
  );
};

const Title = styled("h2", {});

const Images = styled("div", {});

const BackButton = styled("button", {});
