import type { AppProps } from 'next/app';

import Header from '@components/Header'
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const initState = useInitialState();
  return (
    <AppContext.Provider value={initState}>
      <Header/>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
