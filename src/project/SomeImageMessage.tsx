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
  return (
    <PhotoList>
      {props.imageMessageData.items.map((imageData, i) => {
        return <Photo key={i} src={imageData.url} alt="picture sent" width={50} height={50} />;
      })}
    </PhotoList>
  );
};
const PhotoList = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

const Photo = styled("img", {
  width: "33%",
  height: "auto",
});
