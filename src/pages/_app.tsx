import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import { GlobalStyle, AppContainer, theme } from './styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MD Editor</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}
