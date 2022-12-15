import { SpotifyMusic } from "../common/spotifyMusic/type";

export type Project = {
  project_id: string;
  receiver_name: string;
  spotify_music: SpotifyMusic;
  text_messages: {
    count: number;
    items: TextMessage[];
  };
  image_messages: {
    count: number;
    items: ImageMessage[];
  };
};

export type TextMessage = {
  type: "text";
  text: string;
  sender_name: string;
};

export type ImageMessage = {
  type: "image";
  url: string;
  sender_name: string;
};

export type Message = TextMessage | ImageMessage;
