import {DefaultTheme} from 'styled-components';

const appTheme: DefaultTheme = {
  colors: {
    primary: '#30CA77',
    secondary: '#F05E81',
    terciary: '#F5B308',
    texts: {
      primary: '#535161',
      secondary: '#ABABAB',
      disabled: '#A4A3AF',
    },
    background: {
      black: '#535161',
      disabled: '#A4A3AF',
      screenBackground: '#EEEDF1',
      cardBackground: '#FFFFFF',
    },
    status: {
      success: '#30CA77',
      info: '#00BBBB',
      warning: '#F5B308',
      error: '#F05E81',
    },
  },
  fontSizes: {
    h1: 24,
    h2: 20,
    h3: 18,
    h4: 16,
    h5: 14,
  },
  spacings: {
    tiny: 2,
    small: 4,
    medium: 8,
    large: 12,
    huge: 24,
  },
};

export default appTheme;
