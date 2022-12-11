import React from "react";

import { styled } from "../../stitches.config";

export const SpotifyMusicSelect: React.FC = () => {
  return (
    <Base>
      <MusicAndArtistName>おもかげ - Vaundy</MusicAndArtistName>
      <EditButton>変更する</EditButton>
    </Base>
  );
};

const Base = styled("div", {
  backgroundColor: "#2B2727",
  borderRadius: "2px",
  width: "100%",
  minHeight: "80px",
  position: "relative",
  color: "#fff",
});

const MusicAndArtistName = styled("p", {
  paddingTop: "12px",
  paddingLeft: "16px",
});

const EditButton = styled("button", {
  border: "none",
  position: "absolute",
  top: "24px",
  color: "#fff",
  right: "15px",
  width: "80px",
  height: "30px",
  padding: "6px 8.5px",
  fontSize: "14px",
  backgroundColor: "#3A9B22",
  borderRadius: "8px",
  cursor: "pointer",
});
