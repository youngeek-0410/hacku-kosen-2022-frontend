import { useRouter } from "next/router";
import React from "react";

import { ViewAll } from "../common/ViewAll";
import { styled } from "../stitches.config";

import { ImageMessage } from "./type";

type Props = {
  imageMessageData: {
    count: number;
    items: ImageMessage[];
  };
};

export const SomeImageMessages: React.FC<Props> = (props) => {
  const router = useRouter();
  const project_id = router.query.project_id;

  return (
    <Container>
      <ItemsCaption>
        <CaptionTitle>{props.imageMessageData.count}枚の写真</CaptionTitle>
        <ViewAll href={`/projects/${project_id}/image_messages`} />
      </ItemsCaption>

      <ImagesContainer>
        {props.imageMessageData.items.map((imageData, i) => {
          return <ImageUnit key={i} src={imageData.url} alt="picture sent" width={50} height={50} />;
        })}
      </ImagesContainer>
    </Container>
  );
};

const Container = styled("div", {
  width: "100%",
});

const ItemsCaption = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  margin: "32px 0 0",
});

const CaptionTitle = styled("h2", {
  fontWeight: "700",
  fontSize: "16px",
  color: "$textPrimary",
  margin: "0",
});

const ImagesContainer = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

const ImageUnit = styled("img", {
  width: "33%",
  height: "auto",
});
