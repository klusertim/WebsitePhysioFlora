import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="preload" as="font" href="https://fonts.googleapis.com"/>
          <link rel="preload" as="font" href="https://fonts.gstatic.com" /> */}
          <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet"/>
          <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap"/>
          <link  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}