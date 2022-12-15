import { useRouter } from "next/router";
import React from "react";

import { styled } from "../stitches.config";

import { ProjectHeading3 } from "./common/ProjectHeading3";
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
    <div>
      <ProjectHeading3 viewAllLink={`/projects/${project_id}/image_messages`}>
        {props.imageMessageData.count}件の写真
      </ProjectHeading3>

      <PhotoList>
        {props.imageMessageData.items.map((imageData, i) => {
          return <Photo key={i} src={imageData.url} alt="picture sent" width={50} height={50} />;
        })}
      </PhotoList>
    </div>
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
