import React from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import CodePush, {CodePushOptions} from 'react-native-code-push';
import Screens from './src/screens';
import UserContextProvider from './src/context/user.context';
import {AppLightTheme} from './src/theme';
const App = () => {
  return (
    <NavigationContainer theme={AppLightTheme}>
      <StyledThemeProvider theme={AppLightTheme}>
        <UserContextProvider>
          <Screens />
        </UserContextProvider>
      </StyledThemeProvider>
    </NavigationContainer>
  );
};
const codePushOptions: CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};
export default CodePush(codePushOptions)(App);
