import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeScreen, {HomeScreenProps} from './home.screen';
import SplashScreen, {SplashScreenProps} from './splash/splash.screen';

interface ScreenProps {}

export type StackScreenNames = {
  Splash: SplashScreenProps;
  Home: HomeScreenProps;
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
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};

export default Screens;
