import { SpotifyMusic } from "../type";

export type MusicPlayer = {
  togglePlay: () => void;
  pause: () => void;
};

export const musicPlayerFactory = (music: SpotifyMusic | null): MusicPlayer => {
  if (!music || typeof window === "undefined")
    return {
      pause: () => {
        // NOTE: node環境やmusicがnullの場合は何もしない
      },
      togglePlay: () => {
        // NOTE: node環境やmusicがnullの場合は何もしない
      },
    };

  const musicPlayer = new Audio(music.preview_url);
  return {
    pause: () => {
      musicPlayer.pause();
    },
    togglePlay: () => {
      if (musicPlayer.paused) {
        musicPlayer.play();
      } else {
        musicPlayer.pause();
      }
    },
  };
};
