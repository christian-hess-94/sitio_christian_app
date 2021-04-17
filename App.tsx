import React from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import CodePush, {CodePushOptions} from 'react-native-code-push';
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
const codePushOptions: CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};
export default CodePush(codePushOptions)(App);
