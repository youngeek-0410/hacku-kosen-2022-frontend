import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {},
    fonts: {},
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
  },
  utils: {},
});

export const globalStyles = globalCss({
  body: {
    margin: 0,
  },
});
