import React, { useState } from "react";
import { useRouter } from "next/router";

import { styled } from "../stitches.config";
import { createProject } from "../utils/apis";

const receiverNamePlaceholder = "山田 太郎";

export const NewProjectPage: React.FC = () => {
  const [receiverName, setReceiverName] = useState("");
  const router = useRouter();

  const registerProject = async () => {
    if (!canRegister) return;
    const project_id = await createProject(receiverName);
    router.push(`/projects/${project_id}`);
  };

  const canRegister = receiverName !== "";

  return (
    <>
      <Base>
        <div>
          <PageTitle>色紙を作成する</PageTitle>
          <Discription>ここで入力されたお名前はページが公開されるときにも使用されます。</Discription>
          <InputName
            value={receiverName}
            placeholder={receiverNamePlaceholder}
            onChange={(e) => setReceiverName(e.target.value)}
          />
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
  width: "80%",
  minHeight: "100vh",
  margin: "0 auto",
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
  margin: "8px auto 0",
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
  margin: "20px auto 0",
  "&:focus-visible, &:focus": {
    outline: "none",
  },
});

// const InputNameWrapper = styled("div", {
//   marginTop: "16px",
// });

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
});
