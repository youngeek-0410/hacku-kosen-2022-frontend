import React from "react";

import { styled } from "../../stitches.config";
import { SectionTitle } from "../NewMessagePage";

export const MusicEdit: React.FC = () => {
  return (
    <>
      <SectionTitle>思い出の音楽</SectionTitle>
      <PlannedMusic></PlannedMusic>
    </>
  );
};

const PlannedMusic = styled("div", {});
