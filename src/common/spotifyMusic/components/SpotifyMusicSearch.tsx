/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

import { MusicPlayer, musicPlayerFactory } from "../utils/musicPlayer";
import { SpotifyMusic } from "../type";
import { useSearchSpotifyMusic } from "../hooks/useSearchSpotifyMusic";

export const SpotifyMusicSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSpotifyMusic, setCurrentSpotifyMusic] = useState<SpotifyMusic | null>(null);
  const searchResults = useSearchSpotifyMusic(searchQuery);
  const musicPlayer = musicPlayerFactory(currentSpotifyMusic);

  useEffect(() => {
    // return musicPlayer.pause;
  }, [musicPlayer, currentSpotifyMusic]);

  return (
    <>
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

      <h3>検索結果</h3>
      {searchResults.length > 0 ? (
        <>
          {searchResults.map((spotifyMusic, i) => {
            return (
              <div key={i}>
                <img src={spotifyMusic.album.image_url} alt={spotifyMusic.name} width={40} height={40} />
                <a href={spotifyMusic.external_url}>
                  {spotifyMusic.name} - {spotifyMusic.artist.name}
                </a>
                <button
                  onClick={() => {
                    setCurrentSpotifyMusic(spotifyMusic);
                  }}
                >
                  選択
                </button>
              </div>
            );
          })}
        </>
      ) : (
        <p>no musics...</p>
      )}

      <div>
        <h3>選択中の音楽</h3>
        {!!currentSpotifyMusic ? (
          <div>
            <img src={currentSpotifyMusic.album.image_url} alt={currentSpotifyMusic.name} width={40} height={40} />
            <p>{currentSpotifyMusic.name}</p> <p>{currentSpotifyMusic.artist.name}</p>
            <PlayButton music={currentSpotifyMusic} musicPlayer={musicPlayer} />
          </div>
        ) : (
          <p>no select</p>
        )}
      </div>
    </>
  );
};

const PlayButton: React.FC<{ music: SpotifyMusic; musicPlayer: MusicPlayer }> = ({ music, musicPlayer }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // NOTE: musicが変わったら再生を止める
  useEffect(() => {
    return () => {
      musicPlayer.pause();
      setIsPlaying(false);
    };
  }, [music, musicPlayer]);

  return (
    <button
      onClick={() => {
        musicPlayer.togglePlay();
        setIsPlaying(!isPlaying);
      }}
    >
      {isPlaying ? "ストップ" : "再生"}
    </button>
  );
};
