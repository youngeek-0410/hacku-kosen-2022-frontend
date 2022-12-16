import React from "react";

import { styled } from "../stitches.config";

import { ImageMessage } from "./type";

type Props = {
  imageMessageData: {
    count: number;
    items: ImageMessage[];
  };
};

export const SomeImageMessages: React.FC<Props> = (props) => {
  // 三件で取得する予定ができていないのでsliceで三件にしている
  const photos = props.imageMessageData.items.slice(0, 3);
  return (
    <PhotoList>
      {photos.map((imageData, i) => {
        return <Photo key={i} src={imageData.url} alt="picture sent" width={50} height={50} />;
      })}
    </PhotoList>
  );
};
const PhotoList = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginTop: "8px",
});

const Photo = styled("img", {
  width: "33%",
  height: "auto",
});
