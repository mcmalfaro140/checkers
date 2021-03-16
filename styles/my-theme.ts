// my-theme.ts
import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  breakpoints: {
    small: '576px',
    medium: '768px',
    large: '992px',
    xlarge: '1200px'
  },
  colors: {
    main: 'cyan',
    secondary: 'magenta',
    darkOrange: '#000000'
  },
};

export { myTheme };
