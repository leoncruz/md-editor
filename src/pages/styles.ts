import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: ${props => props.theme.colors.bg};
  }
`;

export const AppContainer = styled.div`
  width: 100%;
  display: flex;
`;
