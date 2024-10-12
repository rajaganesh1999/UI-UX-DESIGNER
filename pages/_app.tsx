import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      <link rel="icon" href="/UI-UX-DESIGNER/favicon.ico" sizes="any" />
      <link rel="icon" href="/UI-UX-DESIGNER/icon-192.png" type="image/png" sizes="192x192" />
      <link rel="icon" href="/UI-UX-DESIGNER/icon-512.png" type="image/png" sizes="512x512" />
      <link rel="apple-touch-icon" href="/UI-UX-DESIGNER/apple-touch-icon.png" />
 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp