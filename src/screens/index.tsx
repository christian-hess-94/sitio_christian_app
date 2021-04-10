import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LoginScreen, {LoginScreenProps} from './home.screen';
import SplashScreen, {SplashScreenProps} from './splash/splash.screen';

interface ScreenProps {}

export type StackScreenNames = {
  Splash: SplashScreenProps;
  Login: LoginScreenProps;
};

const Screens: React.FC<ScreenProps> = () => {
  const {Navigator, Screen} = createStackNavigator<StackScreenNames>();
  return (
    <Navigator initialRouteName="Splash">
      <Screen
        name="Splash"
        component={SplashScreen}
        options={{animationEnabled: false, headerShown: false}}
      />
      <Screen name="Login" options={{title: 'Login'}} component={LoginScreen} />
    </Navigator>
  );
};

export default Screens;
