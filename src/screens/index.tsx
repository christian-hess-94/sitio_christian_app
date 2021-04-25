import {createStackNavigator} from '@react-navigation/stack';

import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import AvailableThemes from '../theme';
import React, {useContext} from 'react';
import {View, Text, useColorScheme} from 'react-native';
import LoginScreen, {LoginScreenProps} from './home.screen';
import SplashScreen, {SplashScreenProps} from './splash/splash.screen';

import {UserContext} from '../context/user.context';

interface ScreenProps {}

export type StackScreenNames = {
  Splash: SplashScreenProps;
  Login: LoginScreenProps;
  Pagina: undefined;
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
            name="Pagina"
            options={{title: 'Página que vai sumir'}}
            component={Paginaquevaisumir}
          />
        </Navigator>
      </StyledThemeProvider>
    </NavigationContainer>
  );
};
const Paginaquevaisumir = () => {
  return (
    <View>
      <Text>PAGINA QUE VAI SUMIR</Text>
    </View>
  );
};
export default Screens;
