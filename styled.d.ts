import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string;
      text: string;
      hint: string;
      accent: string;

      textColors: {
        color1: string;
        color2: string;
        color3: string;
        color4: string;
      };
    };
  }
}
