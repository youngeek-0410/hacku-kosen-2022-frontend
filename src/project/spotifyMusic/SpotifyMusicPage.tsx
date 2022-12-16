import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { SpotifyMusicPlayground } from "../../common/spotifyMusic/components/SpotifyMusicPlayground";
import { useSearchSpotifyTrack } from "../../common/spotifyMusic/hooks/useSearchSpotifyTrack";
import { SpotifyMusic, Track } from "../../common/spotifyMusic/type";
import { styled } from "../../stitches.config";
import { registerProjectSpotifyMusic } from "../../utils/apis";
import { Headline } from "../common/Headline";
import { ProjectHeading3 } from "../common/ProjectHeading3";
import { ProjectParagraph } from "../common/ProjectParagraph";

export const SpotifyMusicPage: React.FC<{ spotifyMusic: SpotifyMusic }> = ({ spotifyMusic }) => {
  const router = useRouter();
  const { project_id } = router.query;
  const [query, setQuery] = useState("");
  const [currentSpotifyMusic, setCurrentSpotifyMusic] = useState<SpotifyMusic>(spotifyMusic);
  const results = useSearchSpotifyTrack(query, 10);

  const onClick = async (track: Track) => {
    const prevSpotifyMusic = currentSpotifyMusic;
    setCurrentSpotifyMusic({ uri: track.uri });
    try {
      await registerProjectSpotifyMusic(project_id as string, track.uri);
    } catch (e) {
      // NOTE: エラーが発生した場合は、前の曲に戻す
      setCurrentSpotifyMusic(prevSpotifyMusic);
    }
  };

  return (
    <div>
      <Headline title="音楽を設定する" />
      <ProjectParagraph>選択された音楽はオリジナルWebサイトの上で再生することができます。</ProjectParagraph>

      <Section>
        <ProjectHeading3>設定中の音楽</ProjectHeading3>
        <SpotifyMusicPlayground spotifyMusic={currentSpotifyMusic} />
      </Section>

      <Section>
        <ProjectHeading3>検索</ProjectHeading3>
        <SearchQueryInput
          type="text"
          placeholder="artist name, music title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <AnimatePresence>
          {results.map((track) => (
            <SpotifyMusicItem
              key={track.uri}
              onClick={() => onClick(track)}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.08 }}
              exit={{ opacity: 0 }}
            >
              <SpotifyMusicCoverImage src={track.album.images[0].url} alt="" width={54} height={54} />
              <SpotifyMusicTexts>
                <div>
                  <SpotifyMusicName>{track.name}</SpotifyMusicName>
                  <SpotifyMusicArtistName>{track.album.artists[0].name}</SpotifyMusicArtistName>
                </div>
                <SelectButtonWrapper>
                  <SelectButton
                    isSelect={currentSpotifyMusic.uri === track.uri}
                    onClick={() => setCurrentSpotifyMusic({ uri: track.uri })}
                  >
                    設定
                  </SelectButton>
                </SelectButtonWrapper>
              </SpotifyMusicTexts>
            </SpotifyMusicItem>
          ))}
        </AnimatePresence>
      </Section>
    </div>
  );
};

const Section = styled("section", {
  margin: "30px 0",
});

const SearchQueryInput = styled("input", {
  margin: "8px 0 20px",
  width: "100%",
  height: "40px",
  paddingLeft: "4px",
  fontSize: "16px",
  border: "1px solid $gray300",
  borderRadius: "4px",
  outline: "none",
  "&:focus": {
    border: "1px solid $gray500",
  },
});

const SpotifyMusicItem = styled(motion.div, {
  display: "flex",
  alignItems: "center",
  minHeight: "70px",
  padding: "8px",
  marginBottom: "8px",
  backgroundColor: "$gray100",
});

const SpotifyMusicCoverImage = styled("img", {
  width: "23%",
  height: "auto",
  marginRight: "16px",
});

const SpotifyMusicTexts = styled("div", {
  flex: "1",
  overflowWrap: "anywhere",
});

const SpotifyMusicName = styled("div", {
  margin: "0",
  fontSize: "18px",
});

const SpotifyMusicArtistName = styled("div", {
  margin: "0",
  fontSize: "14px",
});

const SelectButtonWrapper = styled("div", {
  textAlign: "right",
});

const SelectButton = styled("button", {
  padding: "6px 12px",
  margin: "0px 4px 4px 0px",
  fontSize: "14px",
  borderRadius: "4px",
  border: "none",

  background: "$musicButton",
  color: "$gray50",

  transition: "opacity 0.2s",

  variants: {
    isSelect: {
      true: {
        background: "$gray500",
      },
      false: {
        background: "$musicButton",
        cursor: "pointer",
        "&:active": {
          opacity: ".8",
        },
      },
    },
  },
});
