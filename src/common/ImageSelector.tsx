import React, { useRef, useState } from "react";
import { BsFillFileEarmarkPlusFill } from "react-icons/bs";
RxCross2;
import { RxCross2 } from "react-icons/rx";

import { styled } from "../stitches.config";

type UUID = string;
export type Image = {
  key: UUID;
  url: string;
  file: File;
};

type Props = {
  images: Image[];
  choseLimit: number;
  onFileChange: (images: Image[]) => void;
  onFileDelete: (key: UUID) => void;
};

export const ImageSelector: React.FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const canUpload = props.images.length < props.choseLimit;

  const onClick = () => {
    if (inputRef.current) inputRef.current.click();
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const uploadedImages: Image[] = Array.from(files).map((f) => {
        return {
          key: crypto.randomUUID(),
          url: URL.createObjectURL(f),
          file: f,
        };
      });

      if (props.images.length + uploadedImages.length > props.choseLimit) {
        alert(`You can only upload a maximum of ${props.choseLimit} files`);
        return;
      }
      props.onFileChange(uploadedImages);
    }
  };

  return (
    <Base>
      <FileUploadButton onClick={onClick} disabled={!canUpload}>
        <HiddenFileInput type="file" multiple accept="image/*" ref={inputRef} onChange={onFileChange} />
        <BsFillFileEarmarkPlusFill />
      </FileUploadButton>
      {props.images.map((image, i) => (
        <UploadItem key={i}>
          <DeleteUploadItemButton onClick={() => props.onFileDelete(image.key)}>
            <RxCross2 />
          </DeleteUploadItemButton>
          <img src={image.url} width={87} height={87} />
        </UploadItem>
      ))}
    </Base>
  );
};

export const useImageSelector = () => {
  const [images, setImages] = useState<Image[]>([]);
  const onFileChange = (newImages: Image[]) => {
    setImages([...images, ...newImages]);
  };
  const onFileDelete = (key: string) => {
    setImages(images.filter((image) => image.key !== key));
  };

  return [images, onFileChange, onFileDelete] as const;
};

const Base = styled("div", {
  display: "flex",
  overflow: "scroll",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

// TODO: disabled の時のスタイルが適当
const FileUploadButton = styled("button", {
  marginRight: "5px",
  display: "block",
  width: "87px",
  height: "87px",
  minWidth: "87px",
  minHeight: "87px",
  backgroundColor: "#F5F5F5",
  color: "#515151",
  fontSize: "28px",
  border: "none",
  cursor: "pointer",
  "&:active": {
    outline: "none",
    backgroundColor: "inherit",
  },
});

const UploadItem = styled("div", {
  display: "block",
  position: "relative",
  marginRight: "5px",
  minWidth: "87px",
  minHeight: "87px",
});

const DeleteUploadItemButton = styled("button", {
  width: "24px",
  height: "24px",
  background: "#FAF9F7",
  color: "#000000",
  opacity: 0.9,
  position: "absolute",
  top: "4px",
  right: "4px",
  borderRadius: "50%",
  border: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
});

const HiddenFileInput = styled("input", {
  display: "none",
});
