import React from "react";
import { BsFillFileEarmarkPlusFill } from "react-icons/bs";
RxCross2;
import { RxCross2 } from "react-icons/rx";

import { styled } from "../stitches.config";

const uploadItemsExample = [
  "https://via.placeholder.com/87",
  "https://via.placeholder.com/87",
  "https://via.placeholder.com/87",
  "https://via.placeholder.com/87",
  "https://via.placeholder.com/87",
  "https://via.placeholder.com/87",
];

export const ImageSelector: React.FC = () => {
  return (
    <Base>
      <FileUploadButton>
        <BsFillFileEarmarkPlusFill />
      </FileUploadButton>
      {uploadItemsExample.map((item, i) => (
        <UploadItem key={i}>
          <DeleteUploadItemButton>
            <RxCross2 />
          </DeleteUploadItemButton>
          <img src="https://via.placeholder.com/87" width={87} height={87} />
        </UploadItem>
      ))}
    </Base>
  );
};

const Base = styled("div", {
  display: "flex",
  overflow: "scroll",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

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
});
