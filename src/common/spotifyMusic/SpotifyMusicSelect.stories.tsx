import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { SpotifyMusicSelect } from "./SpotifyMusicSelect";

type Story = ComponentStoryObj<typeof SpotifyMusicSelect>;
type Meta = ComponentMeta<typeof SpotifyMusicSelect>;

const meta: Meta = {
  component: SpotifyMusicSelect,
  args: {},
};

export default meta;

export const Default: Story = {
  decorators: [],
  play: async () => {},
};
