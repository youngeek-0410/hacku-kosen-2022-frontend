import React from "react";

import { ProjectHeading3 } from "./common/ProjectHeading3";

export const MusicEdit: React.FC = () => {
  return (
    <>
      <ProjectHeading3>思い出の音楽</ProjectHeading3>
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/6uqewERWZ1vzfCcin1zFIp?utm_source=generator"
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </>
  );
};
