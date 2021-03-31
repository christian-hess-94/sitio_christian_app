import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';

import SharkSVG from './src/assets/icons/profile/001-shark.svg';
import appTheme from './src/themes/theme';
const App = () => {
  return (
    <SafeAreaView testID="app-safe-area-view">
      <StyledThemeProvider theme={appTheme}>
        <SharkSVG color="black" />
      </StyledThemeProvider>
    </SafeAreaView>
  );
};

export default App;
