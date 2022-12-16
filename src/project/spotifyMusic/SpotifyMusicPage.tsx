import React, { useState } from "react";

import { useSearchSpotifyTrack } from "../../common/spotifyMusic/hooks/useSearchSpotifyTrack";
import { SpotifyMusic } from "../../common/spotifyMusic/type";

export const SpotifyMusicPage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [currentSpotifyMusic, setCurrentSpotifyMusic] = useState<SpotifyMusic>();
  const results = useSearchSpotifyTrack(query);

  console.log("results", results);

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
    </div>
  );
};
