import { useRouter } from "next/router";
import React from "react";

import { toBase64 } from "../../common/imageEncoder";
import { ImageSelector, useImageSelector } from "../../common/ImageSelector";
import { registerProjectTopText } from "../../utils/apis";
import { Headline } from "../common/Headline";
import { ProjectParagraph } from "../common/ProjectParagraph";
import { Project } from "../type";

type Props = {
  project: Project;
};
export const TopImagePage: React.FC<Props> = ({ project }) => {
  const currentImageUrl = project.top_image?.url;
  const router = useRouter();
  const { project_id } = router.query;

  const [images, onFileChange, onFileDelete] = useImageSelector();

  const canSubmit = images.length > 0;
  const onSubmit = async () => {
    if (canSubmit) {
      const topImage = await toBase64(images[0].file);
      await registerProjectTopText(project_id as string, topImage);
    }

    router.push(`/projects/${project_id}/`);
  };

  return (
    <>
      <Headline title="ベストショット" />
      <ProjectParagraph>ベストショットにはオリジナルWebサイトのトップに配置する写真を設定できます</ProjectParagraph>

      <div>
        <p>現在設定中のベストショット</p>
        <img src={currentImageUrl} alt="" />
      </div>

      <div>
        <p>アップロードする</p>
        <ImageSelector images={images} choseLimit={1} onFileChange={onFileChange} onFileDelete={onFileDelete} />
      </div>

      <button disabled={!canSubmit} onClick={onSubmit}>
        設定する
      </button>
    </>
  );
};
