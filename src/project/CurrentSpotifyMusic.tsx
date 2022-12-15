import React from "react";

import { SpotifyMusic } from "../common/spotifyMusic/type";
import { styled } from "../stitches.config";

export const CurrentSpotifyMusic: React.FC<{ spotifyMusic: SpotifyMusic }> = ({ spotifyMusic }) => {
  const urlKey = spotifyMusic.uri.split("/")[2];
  const embedUrl = `https://open.spotify.com/embed/track/${urlKey}?utm_source=generator`;
  return (
    <Base>
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/6uqewERWZ1vzfCcin1zFIp?utm_source=generator"
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
