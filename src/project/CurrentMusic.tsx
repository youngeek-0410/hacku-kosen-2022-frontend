import React from "react";

import { styled } from "../stitches.config";

export const CurrentMusic: React.FC = () => {
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
