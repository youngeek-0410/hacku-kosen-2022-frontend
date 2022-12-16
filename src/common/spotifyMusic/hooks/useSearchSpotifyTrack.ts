import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

import { searchSpotifyMusicApiUrl } from "../../../utils/apis";
import { useSpotifyApiAccessToken } from "../contexts/SpotifyApiAuthProvider";
import { Track } from "../type";

type SpotifyApiSearchRequest = {
  q: string;
  type: "track";
  limit: number;
};

type SpotifyApiSearchResponse = {
  tracks: {
    items: Track[];
  };
};

export const useSearchSpotifyTrack = (query: string, limit: number): Track[] => {
  const accessToken = useSpotifyApiAccessToken();
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    (async () => {
      if (query === "") {
        setTracks([]);
        return;
      }

      const params: SpotifyApiSearchRequest = {
        q: query,
        type: "track",
        limit: limit,
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
      setTracks(data.tracks.items);
    })();
  }, [accessToken, query]);

  return tracks;
};
