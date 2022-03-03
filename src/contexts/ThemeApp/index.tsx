import React, { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../themes';
import { ThemeAppContext } from './context';

interface Props {
  children: React.ReactNode;
}
export const ThemeAppProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(mainTheme);

  return (
    <ThemeAppContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeAppContext.Provider>
  );
};

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeAppContext);

  return {
    theme,
    setTheme
  };
};
