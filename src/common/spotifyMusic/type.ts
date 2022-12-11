export type SpotifyMusic = {
  name: string;
  external_url: string;
  preview_url: string;
  album: {
    name: string;
    image_url: string;
  };
  artist: {
    name: string;
    external_url: string;
  };
};
