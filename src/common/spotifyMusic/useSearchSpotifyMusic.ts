import axios, { AxiosRequestConfig } from "axios";

import { SpotifyMusic } from "./type";

const useSpotifyApiAccuessToken = (): string => {
  return ""; // TODO: ここは後でいい感じに実装する
};

type SpotifyApiSearchRequest = {
  q: string;
  type: "track";
  limit: 10;
};

type Track = {
  album: {
    name: string;
    external_urls: {
      spotify: string;
    };
    artists: {
      name: string;
      external_urls: {
        spotify: string;
      };
    }[];
    images: {
      url: string;
    }[];
  };
  name: string;
  preview_url: string;
  external_urls: {
    spotify: string;
  };
};

type SpotifyApiSearchResponse = {
  tracks: {
    items: Track[];
  };
};

const searchSpotifyMusicApiUrl = "https://api.spotify.com/v1/search";

export const useSearchSpotifyMusic = async (query: string): Promise<SpotifyMusic[]> => {
  const accessToken = useSpotifyApiAccuessToken();

  const params: SpotifyApiSearchRequest = {
    q: query,
    type: "track",
    limit: 10,
  };

  const requestConfig: AxiosRequestConfig = {
    url: searchSpotifyMusicApiUrl,
    method: "GET",
    params,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
      "content-type": "application/json",
    },
  };

  const { data, status } = await axios.request<SpotifyApiSearchResponse>(requestConfig);
  if (status !== 200) throw new Error("failed to search spotify music");

  const searchResult: SpotifyMusic[] = data.tracks.items.map((track) => serializeSpotifyMusic(track));

  return searchResult;
};

const serializeSpotifyMusic = (track: Track): SpotifyMusic => {
  const music: SpotifyMusic = {
    name: track.name,
    external_url: track.external_urls.spotify,
    preview_url: track.preview_url,
    album: {
      name: track.album.name,
      image_url: track.album.images[0].url,
    },
    artist: {
      name: track.album.artists[0].name,
      external_url: track.album.artists[0].external_urls.spotify,
    },
  };

  return music;
};
