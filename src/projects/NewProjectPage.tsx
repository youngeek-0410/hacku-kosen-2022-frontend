import React, { useState } from "react";
import { useRouter } from "next/router";

import { styled } from "../stitches.config";

const callApi = (receiverName: string) => {
  return "abcdefg";
};

const receiverNamePlaceholder = "山田 太郎";

export const NewProjectPage: React.FC = () => {
  const [receiverName, setReceiverName] = useState("");
  const router = useRouter();

  const registerProject = () => {
    if (!canRegister) return;
    const project_id = callApi(receiverName);
    router.push(`/projects/${project_id}`);
  };

  const canRegister = receiverName !== "";

  return (
    <Wrapper>
      <PageTitle>色紙を作成する</PageTitle>
      <Discription>ここで入力されたお名前はページが公開されるときにも使用されます。</Discription>
      <InputNameWrapper>
        <InputName
          value={receiverName}
          placeholder={receiverNamePlaceholder}
          onChange={(e) => setReceiverName(e.target.value)}
        />
      </InputNameWrapper>

      <RegisterProjectButton onClick={registerProject} disabled={!canRegister}>
        色紙を作成する
      </RegisterProjectButton>
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
  textAlign: "center",
  "&:focus-visible, &:focus": {
    outline: "none",
  },
});

const RegisterProjectButton = styled("button", {
  marginTop: "16px",
  display: "block",
  margin: "0 auto",
});

const InputNameWrapper = styled("div", {
  marginTop: "16px",
});
