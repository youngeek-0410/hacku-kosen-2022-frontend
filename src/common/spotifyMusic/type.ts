export type SpotifyMusic = {
  name: string; // 楽曲名
  external_url: string; // 楽曲のSpotifyページのURL
  preview_url: string; // 30sのサンプル再生のURL
  album: {
    name: string; // アルバム名
    image_url: string; // アルバムのカバー画像のURL
  };
  artist: {
    name: string; // アーティスト名
    external_url: string; // アーティストのSpotifyページのURL
  };
};

export type SpotifyApiAccessToken = string;
