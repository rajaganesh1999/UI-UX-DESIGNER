// pages/_app.tsx or _app.js
import '../styles/globals.css'; // Ensure this is in _app

import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="https://sharedby.blomp.com/yLFAdH" sizes="any" />
        <link rel="icon" href="https://sharedby.blomp.com/9daPnT" type="image/png" sizes="192x192" />
        <link rel="icon" href="https://sharedby.blomp.com/1DTHNM" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="https://sharedby.blomp.com/Vrm68e" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

