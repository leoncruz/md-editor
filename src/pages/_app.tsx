import React from 'react';
import { AppProps } from 'next/app';
import { GlobalStyle, AppContainer } from './styles';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MD Editor</title>
      </Head>
      <GlobalStyle />
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </>
  );
}
