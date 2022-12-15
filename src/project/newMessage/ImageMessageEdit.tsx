import React from "react";

import { styled } from "../../stitches.config";

export const ImageMessageEdit: React.FC = () => {
  return (
    <Images>
      <UploadImageArea type="file" accept="image/*" multiple />
      <UploadedImage src=""></UploadedImage>
    </Images>
  );
};

const Images = styled("div", {});

const UploadImageArea = styled("input", {});

const UploadedImage = styled("img", {});
