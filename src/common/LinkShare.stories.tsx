import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { LinkShare } from "./LinkShare";

type Meta = ComponentMeta<typeof LinkShare>;

const meta: Meta = {
  component: LinkShare,
  decorators: [],
  args: {},
};

export default meta;

export const Default: ComponentStoryObj<typeof LinkShare> = {};
