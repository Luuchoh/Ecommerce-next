/* eslint-disable no-undef */
import type { AppProps } from 'next/app';
import Script from 'next/script';

import Header from '@components/Header';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const initState = useInitialState();
  return (
    <AppContext.Provider value={initState}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3BM4FXQT4G" strategy="afterInteractive"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3BM4FXQT4G');`}
      </Script>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
