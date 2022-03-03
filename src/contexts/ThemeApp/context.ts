import { createContext } from 'react';
import { DefaultTheme } from 'styled-components';

interface Props {
  theme: DefaultTheme;
  setTheme: (newTheme: DefaultTheme) => void;
}

export const ThemeAppContext = createContext({} as Props);
