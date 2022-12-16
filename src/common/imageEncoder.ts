import JSZip from "jszip";

import { Image } from "./ImageSelector";

export type Base64 = string;

export const toZipAndBase64 = async (images: Image[]): Promise<Base64> => {
  const zip = new JSZip();

  images.forEach((image) => {
    zip.file(image.file.name, image.file);
  });
  const zipBlob = await zip.generateAsync({ type: "base64" });

  return zipBlob;
};

export const toBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
};
