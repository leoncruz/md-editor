import styled, { createGlobalStyle, DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    bg: '#282828',
    text: '#fbf1c7',
    hint: '#a89984'
  }
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.bg};
  }
`;

export const AppContainer = styled.div`
  max-width: 36rem;
  margin: 3rem auto;
`;
