import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalStyle } from './styles';
import { ThemeAppProvider } from '../contexts/ThemeApp';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MD Editor</title>
      </Head>
      <ThemeAppProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeAppProvider>
    </>
  );
}
