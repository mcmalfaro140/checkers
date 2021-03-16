// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    }

    colors: {
      main: string;
      secondary: string;
      darkOrange: string;
    };
  }
}