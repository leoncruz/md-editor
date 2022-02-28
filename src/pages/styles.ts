import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const AppContainer = styled.div`
  max-width: 36rem;
  margin: 3rem auto;
`;
