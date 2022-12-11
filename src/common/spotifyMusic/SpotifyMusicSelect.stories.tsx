import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { SpotifyMusicSelect } from "./SpotifyMusicSelect";
import { SpotifyMusic } from "./type";

type Story = ComponentStoryObj<typeof SpotifyMusicSelect>;
type Meta = ComponentMeta<typeof SpotifyMusicSelect>;

const meta: Meta = {
  component: SpotifyMusicSelect,
  args: {},
};

export default meta;
const exampleSpotifyMusic: SpotifyMusic = {
  name: "おもかげ",
  preview_url:
    "https://p.scdn.co/mp3-preview/7fa8d4a77dacfc513f2be625bbdb9bc48f0bbed4?cid=ce4decf85a2149efa2da06676bce5ec8",
  external_url: "https://open.spotify.com/track/6uqewERWZ1vzfCcin1zFIp",
  artist: {
    name: "Vaundy",
    external_url: "https://open.spotify.com/artist/3Z0Q2Z1XZ2Z9Z1",
  },
  album: {
    name: "裸の勇者",
    image_url: "https://i.scdn.co/image/ab67616d0000b273cc4fbd1e1ad650bea96e1fc9",
  },
};

const exampleLongSpotifyMusic: SpotifyMusic = {
  ...exampleSpotifyMusic,
  name: "おもかげ -self cover-",
};

export const ShowSpotifyMusic: Story = {
  decorators: [],
  args: {
    spotifyMusic: exampleSpotifyMusic,
    onChange: (spotifyMusic: SpotifyMusic) => {},
  },
  play: async () => {},
};

export const ShowLongNameSpotifyMusic: Story = {
  decorators: [],
  args: {
    spotifyMusic: exampleLongSpotifyMusic,
    onChange: (spotifyMusic: SpotifyMusic) => {},
  },
  play: async () => {},
};

export const NoRegisterSpotifyMusic: Story = {
  decorators: [],
  args: {
    spotifyMusic: null,
    onChange: (spotifyMusic: SpotifyMusic) => {},
  },
  play: async () => {},
};
