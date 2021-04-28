import {DefaultTheme} from 'styled-components';
import {DefaultTheme as PaperTheme} from 'react-native-paper';
import {Theme} from '@react-navigation/native';
const PaperDarkTheme: DefaultTheme & typeof PaperTheme & Theme = {
  ...PaperTheme,
  colors: {
    ...PaperTheme.colors,
    primary: '#30CA77',
    accent: '#F05E81',
    border: '#535161',
    card: '#535161',
    terciary: '#F5B308',
    status: {
      success: '#30CA77',
      info: '#00BBBB',
      warning: '#F5B308',
    },
    disabled: '#A4A3AF',
    backdrop: '#535161',
    background: '#535161',
    surface: '#535161',
    error: '#F05E81',
    notification: '#30CA77',
    onBackground: '#535161',
    onSurface: '#535161',
    placeholder: '#A4A3AF',
    text: '#FFFFFF',
    invertedText: '#535161',
  },
  fonts: {
    ...PaperTheme.fonts,
    regular: {...PaperTheme.fonts.regular, fontWeight: 'bold', fontSize: 14},
    medium: {...PaperTheme.fonts.medium, fontWeight: 'bold', fontSize: 14},
    light: {...PaperTheme.fonts.light, fontSize: 14},
    thin: {...PaperTheme.fonts.thin, fontSize: 14},
  },
  spacings: {
    huge: 8,
    large: 6,
    medium: 4,
    small: 2,
    tiny: 1,
  },
  animation: {
    scale: 1,
  },
  roundness: 4,
  dark: false,
  mode: 'exact',
};

export default PaperDarkTheme;
