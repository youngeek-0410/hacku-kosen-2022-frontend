import JSZip from "jszip";

import { Image } from "./ImageSelector";

type Base64 = string;

export const toZipAndBase64 = async (images: Image[]): Promise<Base64> => {
  const zip = new JSZip();

  images.forEach((image) => {
    zip.file(image.file.name, image.file);
  });
  const zipBlob = await zip.generateAsync({ type: "base64" });

  return zipBlob;
};
