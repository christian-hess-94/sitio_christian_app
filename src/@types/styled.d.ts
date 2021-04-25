import 'styled-components';
interface AppThemeColors {
  terciary: string;
  status: {
    success: string;
    info: string;
    warning: string;
  };
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
