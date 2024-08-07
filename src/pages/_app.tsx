import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="caST24rr9-_P8ReZVP96X6Sar71hHuzRFiJC0C3nC3U" />
        <title>Cursor Path | Track Your Mouse Journey</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
