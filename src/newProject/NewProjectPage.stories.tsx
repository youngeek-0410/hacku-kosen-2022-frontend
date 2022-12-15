import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { NewProjectPage } from "./NewProjectPage";

type Story = ComponentStoryObj<typeof NewProjectPage>;
type Meta = ComponentMeta<typeof NewProjectPage>;

const meta: Meta = {
  component: NewProjectPage,
};

export default meta;

export const Default: Story = {
  decorators: [],
  play: async () => {},
  args: {},
};
