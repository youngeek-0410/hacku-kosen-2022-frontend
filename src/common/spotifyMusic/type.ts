export type SpotifyMusic = {
  uri: string; // Spotifyサービス上での楽曲識別子
};

export type Track = {
  album: {
    name: string;
    artists: {
      name: string;
    }[];
    images: {
      url: string;
    }[];
  };
  uri: string;
  name: string;
  preview_url: string;
};

export type SpotifyApiAccessToken = string;
