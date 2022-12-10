import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { App } from "./App";

type Story = ComponentStoryObj<typeof App>;
type Meta = ComponentMeta<typeof App>;

const meta: Meta = {
  component: App,
  args: {},
};

export default meta;

export const Default: Story = {
  decorators: [],
  play: async () => {},
};
