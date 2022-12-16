import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      textPrimary: "#1C1B1A",
      textSecondary: "#3C3B3A",
      musicButton: "#1DB954",
      background: "#FAF9F7",
      messegeBackground: "#F3F2F0",

      yellow50: "#FEF9E7",
      yellow100: "#FCEEC2",
      yellow200: "#F9E49C",
      yellow300: "#F5DA77",
      yellow400: "#F1D25C",
      yellow500: "#EDCB43",
      yellow600: "#DDBA3E",
      yellow700: "#C8A538",
      yellow800: "#B28F34",
      yellow900: "#8E6C2C",
      "yellow900-reaction": "#654D1F",

      blue50: "#E5F3FB",
      blue100: "#C1E0F6",
      blue200: "#9CCDF0",
      blue300: "#79B9E8",
      blue400: "#62AAE4",
      blue500: "#509CE0",
      blue600: "#498ED3",
      blue700: "#407CC0",
      blue800: "#386BAE",
      blue900: "#2C4E8E",

      gray50: "#FAF9F7",
      gray100: "#F3F2F0",
      gray200: "#EAE9E7",
      gray300: "#DAD9D7",
      gray400: "#B6B5B3",
      gray500: "#969694",
      gray600: "#6E6D6C",
      gray700: "#5B5A58",
      gray800: "#3C3B3A",
      gray900: "#1C1B1A",

      alert: "#8E2C2C",
    },
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
    background: "$background",
    fontFamily: "Zen Kaku Gothic New",
    color: "$textPrimary",
  },
  "@import": ["url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;700&display=swap')"],
});
