import React, {useContext} from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import CodePush, {CodePushOptions} from 'react-native-code-push';
import Screens from './src/screens';
import UserContextProvider, {UserContext} from './src/context/user.context';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import AvailableThemes from './src/theme';
const App = () => {
  const {
    user: {theme},
  } = useContext(UserContext);
  const colorScheme = useColorScheme();
  return (
    <AppearanceProvider>
      <NavigationContainer theme={AvailableThemes[theme || colorScheme]}>
        <StyledThemeProvider theme={AvailableThemes[theme || colorScheme]}>
          <UserContextProvider>
            <Screens />
          </UserContextProvider>
        </StyledThemeProvider>
      </NavigationContainer>
    </AppearanceProvider>
  );
};
const codePushOptions: CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};
export default CodePush(codePushOptions)(App);
