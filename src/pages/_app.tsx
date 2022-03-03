import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import { GlobalStyle } from './styles';
import { mainTheme } from '../themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MD Editor</title>
      </Head>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
