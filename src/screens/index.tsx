import LoginScreen, {LoginScreenProps} from './login/login.screen';
import React, {useContext} from 'react';
import SplashScreen, {SplashScreenProps} from './splash/splash.screen';

import AvailableThemes from '../theme';
import {NavigationContainer} from '@react-navigation/native';
import PanelScreen from './panel/panel.screen';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {UserContext} from '../context/user.context';
import {createStackNavigator} from '@react-navigation/stack';
import {useColorScheme} from 'react-native';

interface ScreenProps {}

export type StackScreenNames = {
  Splash: SplashScreenProps;
  Login: LoginScreenProps;
  Panel: undefined;
};

const Screens: React.FC<ScreenProps> = () => {
  const {Navigator, Screen} = createStackNavigator<StackScreenNames>();
  const {
    user: {theme},
  } = useContext(UserContext);
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer
      theme={AvailableThemes[theme || colorScheme || 'light']}>
      <StyledThemeProvider
        theme={AvailableThemes[theme || colorScheme || 'light']}>
        <Navigator initialRouteName="Splash">
          <Screen
            name="Splash"
            component={SplashScreen}
            options={{animationEnabled: false, headerShown: false}}
          />
          <Screen
            name="Login"
            options={{title: 'Login'}}
            component={LoginScreen}
          />
          <Screen
            name="Panel"
            options={{title: 'Painel'}}
            component={PanelScreen}
          />
        </Navigator>
      </StyledThemeProvider>
    </NavigationContainer>
  );
};
export default Screens;
