import React from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';

import appTheme from './src/themes/theme';
import Screens from './src/screens';
const App = () => {
  return (
    <NavigationContainer>
      <StyledThemeProvider theme={appTheme}>
        <Screens />
      </StyledThemeProvider>
    </NavigationContainer>
  );
};

export default App;
