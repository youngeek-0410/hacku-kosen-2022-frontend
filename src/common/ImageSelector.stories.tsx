import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { useState } from "react";

import { Image, ImageSelector } from "./ImageSelector";

type Story = ComponentStoryObj<typeof ImageSelector>;
type Meta = ComponentMeta<typeof ImageSelector>;

const meta: Meta = {
  component: ImageSelector,
  decorators: [],
  args: {
    images: [],
  },
};

export default meta;

export const Default = () => {
  const [images, setImages] = useState<Image[]>([]);
  const onFileChange = (newImages: Image[]) => {
    setImages([...images, ...newImages]);
  };
  const onFileDelete = (key: string) => {
    setImages(images.filter((image) => image.key !== key));
  };

  return <ImageSelector images={images} onFileChange={onFileChange} onFileDelete={onFileDelete} choseLimit={6} />;
};
