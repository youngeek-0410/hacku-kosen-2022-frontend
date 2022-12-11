import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

import { useSpotifyApiAccessToken } from "../contexts/SpotifyApiAuthProvider";
import { SpotifyMusic } from "../type";

type SpotifyApiSearchRequest = {
  q: string;
  type: "track";
  limit: 5;
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

export const useSearchSpotifyMusic = (query: string): SpotifyMusic[] => {
  const accessToken = useSpotifyApiAccessToken();
  const [spotifyMusics, setSpotifyMusics] = useState<SpotifyMusic[]>([]);

  useEffect(() => {
    (async () => {
      if (query === "") {
        setSpotifyMusics([]);
        return;
      }

      const params: SpotifyApiSearchRequest = {
        q: query,
        type: "track",
        limit: 5,
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
      setSpotifyMusics(data.tracks.items.map((track) => serializeSpotifyMusic(track)));
    })();
  }, [accessToken, query]);

  return spotifyMusics;
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
