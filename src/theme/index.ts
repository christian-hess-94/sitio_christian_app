import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
} from '@react-navigation/native';

import PaperLightTheme from './light';
import PaperDarkTheme from './dark';

export const AppLightTheme = {
  ...PaperLightTheme,
  ...NavigationLightTheme,
  colors: {
    ...NavigationLightTheme.colors,
    ...PaperLightTheme.colors,
  },
};

export const AppDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
  },
};

interface AppThemes {
  light: typeof AppLightTheme;
  dark: typeof AppDarkTheme;
}
export type ThemeNames = keyof AppThemes;
const AvailableThemes: AppThemes = {
  light: AppLightTheme,
  dark: AppDarkTheme,
};
export default AvailableThemes;
