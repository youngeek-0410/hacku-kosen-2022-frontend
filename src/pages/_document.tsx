import Document, { Head, Html, Main, NextScript } from "next/document";

import { globalStyles } from "../stitches.config";

export default class MyDocument extends Document {
  render(): JSX.Element {
    globalStyles();
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
