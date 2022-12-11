import React from "react";

import { styled } from "../../stitches.config";

import { SpotifyMusic } from "./type";

type Props = {
  spotifyMusic: SpotifyMusic | null;
  onChange: (spotifyMusic: SpotifyMusic) => void;
};
export const SpotifyMusicSelect: React.FC<Props> = (props) => {
  if (!props.spotifyMusic) {
    // TODO: いい感じの登録導線を出す
    // NOTE: 初めにランダムに曲を設定するという手もある？
    return <div>WIP: 曲を設定する(いい感じの登録導線を出す予定)</div>;
  }

  console.log(props.spotifyMusic);
  return (
    <Base>
      <MusicAndArtistName>
        {props.spotifyMusic?.name} - {props.spotifyMusic?.artist.name}
      </MusicAndArtistName>
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
