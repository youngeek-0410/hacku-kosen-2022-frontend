import React from "react";

import { styled } from "../../../stitches.config";
import { SpotifyMusic } from "../type";

export const SpotifyMusicPlayground: React.FC<{ spotifyMusic: SpotifyMusic }> = ({ spotifyMusic }) => {
  const urlKey = spotifyMusic.uri.split(":")[2];
  const embedUrl = `https://open.spotify.com/embed/track/${urlKey}?utm_source=generator`;
  return (
    <Base>
      <iframe
        style={{ borderRadius: "12px" }}
        src={embedUrl}
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </Base>
  );
};

const Base = styled("div", {
  marginTop: "8px",
});
