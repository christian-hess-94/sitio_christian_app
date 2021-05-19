import 'styled-components';
interface AppThemeColors {
  primary: string;
  accent: string;
  border: string;
  card: string;
  terciary: {
    success: string;
    info: string;
    warning: string;
  };
  disabled: string;
  backdrop: string;
  background: string;
  surface: string;
  error: string;
  notification: string;
  onBackground: string;
  onSurface: string;
  placeholder: string;
  text: string;
  invertedText: string;

  // terciary: string;
  // status: {
  //   success: string;
  //   info: string;
  //   warning: string;
  // };
  // invertedText: string;
}
interface AppFont {
  fontFamily?: string;
}
interface AppThemeFonts {
  regular: AppFont;
  medium: AppFont;
  light: AppFont;
  thin: AppFont;
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
    fonts: AppThemeFonts;
    spacings: AppThemeSpacings;
  }
}
