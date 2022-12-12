import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { ImageSelector } from "./FileSelector";

type Story = ComponentStoryObj<typeof ImageSelector>;
type Meta = ComponentMeta<typeof ImageSelector>;

const meta: Meta = {
  component: ImageSelector,
  args: {},
};

export default meta;

export const Default: Story = {
  decorators: [],
  play: async () => {},
};
