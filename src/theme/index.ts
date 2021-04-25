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

interface Themes {
  light: typeof AppLightTheme;
  dark: typeof AppDarkTheme;
}
const AvailableThemes: Themes = {
  light: AppLightTheme,
  dark: AppDarkTheme,
};
export default AvailableThemes;
