import 'styled-components';
interface AppThemeColors {
  primary: string;
  secondary: string;
  terciary: string;
  texts: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  background: {
    black: string;
    disabled: string;
    screenBackground: string;
    cardBackground: string;
  };
  status: {
    success: string;
    info: string;
    warning: string;
    error: string;
  };
}
interface AppThemeFontSizes {
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
}
interface AppThemeSpacings {
  tiny: number;
  small: number;
  medium: number;
  large: number;
  huge: number;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: AppThemeColors;
    fontSizes: AppThemeFontSizes;
    spacings: AppThemeSpacings;
  }
}
