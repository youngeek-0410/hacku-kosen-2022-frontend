import { useRouter } from "next/router";
import React, { useState } from "react";

import { styled } from "../../stitches.config";
import { registerProjectTopText } from "../../utils/apis";
import { Headline } from "../common/Headline";
import { ProjectParagraph } from "../common/ProjectParagraph";
import { Project } from "../type";

type Props = {
  project: Project;
};
export const TopTextPage: React.FC<Props> = ({ project }) => {
  const [topText, setTopText] = useState(project.top_text);
  const router = useRouter();
  const { project_id } = router.query;

  const canSubmit = topText !== "";
  const onSubmit = async () => {
    if (canSubmit && topText !== project.top_text) {
      await registerProjectTopText(project_id as string, topText);
    }

    router.push(`/projects/${project_id}/`);
  };

  return (
    <>
      <Headline title="ひと言メッセージ" />
      <ProjectParagraph>
        ひと言メッセージにはオリジナルWebサイトのトップに配置するメッセージを設定できます
      </ProjectParagraph>

      <Label htmlFor="top_text">ひと言メッセージ</Label>
      <TopText
        name="top_text"
        value={topText}
        rows={2}
        placeholder="OOお疲れさまでした！"
        onChange={(e) => setTopText(e.target.value)}
      />

      <button disabled={!canSubmit} onClick={onSubmit}>
        設定する
      </button>
    </>
  );
};

const Label = styled("label", {
  display: "block",
  marginTop: "20px",
  marginBottom: "2px",
});

const TopText = styled("textarea", {
  width: "95%",
  display: "block",
  padding: "8px 6px",
  lineHeight: "1.5",
  border: "1px solid $gray400",
  letterSpacing: "0.05rem",
  borderRadius: "4px",
});
