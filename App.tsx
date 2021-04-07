import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';

import SharkSVG from './src/assets/icons/profile/001-shark.svg';
import appTheme from './src/themes/theme';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView testID="app-safe-area-view">
        <StyledThemeProvider theme={appTheme}>
          <SharkSVG color="black" />
        </StyledThemeProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
