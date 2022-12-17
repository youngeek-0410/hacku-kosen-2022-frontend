import React, { useState } from "react";
import { useRouter } from "next/router";

import { styled } from "../stitches.config";
import { createProject } from "../utils/apis";

const receiverNamePlaceholder = "山田 太郎";

export const NewProjectPage: React.FC = () => {
  const [nameInputStatus, setNameInputStatus] = useState({ name: "", isTouched: false });
  const router = useRouter();

  const registerProject = async () => {
    if (!canRegister) return;
    const project_id = await createProject(nameInputStatus.name);
    router.push(`/projects/${project_id}`);
  };

  const canRegister = nameInputStatus.name !== "";

  // TODO: 文言が今のコンセプトにはあってないのでそのあたりを修正する
  return (
    <>
      <Base>
        <div>
          <PageTitle>
            オリジナルWebサイト
            <br />
            を作成する
          </PageTitle>
          <Discription>
            渡したい相手のお名前を入力してください
            <br />
            ここで入力されたお名前が公開するWebサイトに表示されます
          </Discription>
          <Label htmlFor="name">お名前</Label>
          <InputName
            name="name"
            value={nameInputStatus.name}
            placeholder={receiverNamePlaceholder}
            onChange={(e) => setNameInputStatus({ name: e.target.value, isTouched: true })}
          />
          <InvalidMessageWrapper>
            <InvalidMessage aria-live="polite" hidden={!(nameInputStatus.name === "" && nameInputStatus.isTouched)}>
              1文字以上入力してください。
            </InvalidMessage>
          </InvalidMessageWrapper>
        </div>
        <NewProjectButton onClick={registerProject} disabled={!canRegister}>
          色紙を作成する
        </NewProjectButton>
      </Base>
    </>
  );
};

const Base = styled("div", {
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const PageTitle = styled("p", {
  fontWeight: "700",
  textAlign: "left",
  fontSize: "24px",
  margin: "0",
  color: "$textPrimary",
});

const Discription = styled("p", {
  textAlign: "left",
  fontSize: "14px",
  margin: "8px auto 16px",
  color: "$textPrimary",
});

const Label = styled("label", {
  fontSize: "12px",
  color: "$textPrimary",
});

const InputName = styled("input", {
  width: "326px",
  maxWidth: "100%",
  height: "33px",
  background: "#F1F0EE",
  border: "3px solid #E7E6E4",
  borderRadius: "4px",
  boxSizing: "border-box",
  paddingLeft: "8px",
});

const InvalidMessageWrapper = styled("div", {
  height: "32px",
  margin: "4px 0 0 0",
});

const InvalidMessage = styled("p", {
  fontSize: "12px",
  color: "$alert",
  margin: "unset",
});

const NewProjectButton = styled("button", {
  color: "#FFFFFF",
  background: "$yellow900",
  fontWeight: "700",
  fontSize: "20px",
  width: "100%",
  maxWidth: "100%",
  height: "61px",
  borderRadius: "44px",
  border: "none",
  margin: "30px auto",

  position: "absolute",
  bottom: 0,
  left: 0,
  "&:active": {
    background: "$yellow900-reaction",
  },
  "&:disabled": {
    background: "$gray400",
  },
});
