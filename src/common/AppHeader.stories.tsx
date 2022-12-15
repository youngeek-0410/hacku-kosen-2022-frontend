import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { AppHeader } from "./AppHeader";

type Meta = ComponentMeta<typeof AppHeader>;

const meta: Meta = {
  component: AppHeader,
  decorators: [],
  args: {},
};

export default meta;

export const Default: ComponentStoryObj<typeof AppHeader> = {};
