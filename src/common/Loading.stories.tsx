import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Loading } from "./Loading";

type Meta = ComponentMeta<typeof Loading>;

const meta: Meta = {
  component: Loading,
  decorators: [],
  args: {},
};

export default meta;

export const Default: ComponentStoryObj<typeof Loading> = {};
