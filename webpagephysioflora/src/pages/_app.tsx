import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import "@fontsource/comfortaa";
import InfoBoxProvider from "@/contexts/infobox.provider";


export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Physiotherapie Flora</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          colors: {
            pink: ["#D70063"],
            blue: ["#83CDF3"]
          },
          fontFamily: "Montserrat",
          headings:{
            fontFamily: "Montserrat"
          },
          
        }}
      >
        <InfoBoxProvider>
          <Component {...pageProps} />
        </InfoBoxProvider>
      </MantineProvider>
    </>
  );
}