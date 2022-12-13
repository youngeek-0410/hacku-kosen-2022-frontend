import { useRouter } from "next/router";
import React from "react";

import { styled } from "../stitches.config";

export const TopPage: React.FC = () => {
  const router = useRouter();
  const toCreateProjectPage = () => {
    router.push("/new_project");
  };
  return (
    <>
      <Header></Header>
      <CenteringWrapper>
        <Box></Box>
        <Catchphrase>
          感謝の言葉。
          <br />
          それはとっても嬉しいもの。
          <br />
          でもその思い出は言葉だけでは表せない。
          <br />
          必死に頑張っている時の写真や、
          <br />
          一緒にふざけてとった動画。
          <br />
          その思い出を一つに詰め込んで、
          <br />
          デジタルにしかできない表現を。
        </Catchphrase>
      </CenteringWrapper>
      <CenteringWrapper>
        <NewProjectButton onClick={toCreateProjectPage}>色紙を作成する</NewProjectButton>
      </CenteringWrapper>
      <Section>
        <SectionTitle>Cloveeeeとは？</SectionTitle>
        <SectionText>
          以下説明文
          <br />
          aaaaa
        </SectionText>
      </Section>
      <Section>
        <SectionTitle>Cloveeeeとは？</SectionTitle>
        <SectionText>
          以下説明文
          <br />
          aaaaa
          <br />
          hfahdjfhjhsdjf
        </SectionText>
      </Section>
      <Section>
        <SectionTitle>Cloveeeeとは？</SectionTitle>
        <SectionText>
          以下説明文
          <br />
          aaaaa
        </SectionText>
      </Section>
    </>
  );
};

const Header = styled("header", {
  height: "62px",
  position: "sticky",
  top: "0",
  background: "white",
});

const Box = styled("div", {
  width: "226px",
  height: "59px",
  background: "#D9D9D9",
  margin: "126px auto 0",
});

const Catchphrase = styled("p", {
  textAlign: "left",
  fontSize: "14px",
  fontFamily: "Zen Kaku Gothic New",
  width: "318px",
  height: "140px",
  display: "inline-block",
  margin: "30px auto 0",
});

const CenteringWrapper = styled("div", {
  textAlign: "center",
});

const NewProjectButton = styled("button", {
  color: "#FFFFFF",
  background: "$yellow900",
  fontWeight: "700",
  fontSize: "20px",
  width: "306px",
  height: "61px",
  borderRadius: "44px",
  border: "none",
  textAlign: "center",
  margin: "30px auto",
});

const Section = styled("div", {
  textAlign: "center",
  mergin: "20px auto 0",
});

const SectionTitle = styled("p", {
  textAlign: "left",
  fontSize: "20px",
  fontWeight: "700",
  color: "#1C1B1A",
  width: "318px",
  display: "inline-block",
  margin: "20px auto 0",
});

const SectionText = styled("p", {
  width: "318px",
  fontSize: "14px",
  lineHeight: "20px",
  textAlign: "left",
  display: "inline-block",
});
