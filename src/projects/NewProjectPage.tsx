import React from "react";

import { styled } from "../stitches.config";

export const NewProjectPage: React.FC = () => {
  const registerProject = () => {
    alert("registered");
  };
  return (
    <Wrapper>
      <PageTitle>色紙を作成する</PageTitle>
      <Discription>ここで入力されたお名前はページが公開されるときにも使用されます。</Discription>
      <InputNameWrapper>
        <InputName />
      </InputNameWrapper>
      <RegisterButtonWrapper>
        <RegisterProjectButton onClick={registerProject}>色紙を作成する</RegisterProjectButton>
      </RegisterButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  marginTop: "32px",
  textAlign: "center",
});

const PageTitle = styled("h2", {});

const Discription = styled("p", {
  marginTop: "16px",
});

const InputName = styled("input", {
  borderBottom: "1px solid #000000",
  borderRight: "none",
  borderLeft: "none",
  borderTop: "none",
});

const RegisterProjectButton = styled("button", {
  marginTop: "16px",
});

const InputNameWrapper = styled("div", {
  marginTop: "16px",
});

const RegisterButtonWrapper = styled("div", {
  marginTop: "16px",
});
