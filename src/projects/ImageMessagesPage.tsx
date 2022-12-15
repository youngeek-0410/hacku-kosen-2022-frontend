import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";

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
      <Headline>
        <BackButton
          href={{
            pathname: "/projects/[project_id]",
            query: { project_id: project_id },
          }}
        >
          <IconWrapper>
            <IoChevronBackOutline color="#1C1B1A" size={20} />
          </IconWrapper>
        </BackButton>
        <Title>{props.count}件の写真</Title>
      </Headline>
      <ImageContainers>
        {props.items.map((imageMessageData, i) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <ImageContainer>
              <Image key={i} src={imageMessageData.url} layout={"fill"} objectFit={"cover"} alt="picture sent" />
            </ImageContainer>
          );
        })}
      </ImageContainers>
    </>
  );
};

const Headline = styled("div", {
  width: "80%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
});

const Title = styled("p", {
  fontSize: "24px",
  fontWeight: "700",
  color: "$textPrimary",
});

const IconWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
});

const BackButton = styled(Link, {
  width: "30px",
});

const ImageContainer = styled("div", {
  position: "relative",
  width: "calc((100% - 12px) / 3)",
  height: "17vh",
  margin: "2px",
});

const ImageContainers = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  letterSpacing: "0",
  wordSpacing: "0",
  fontSize: "0",
});
