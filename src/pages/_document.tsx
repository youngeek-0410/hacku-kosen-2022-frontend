import Document, { Head, Html, Main, NextScript } from "next/document";

import { getCssText, globalStyles } from "../stitches.config";

export default class MyDocument extends Document {
  render(): JSX.Element {
    globalStyles();
    return (
      <Html>
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
