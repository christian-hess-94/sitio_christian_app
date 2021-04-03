import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import HomeScreen, {HomeScreenProps} from './home.screen';
import SplashScreen, {SplashScreenProps} from './splash/splash.screen';

interface ScreenProps {}

type StackScreenNamesAndProps = {
  Splash: SplashScreenProps;
  Home: HomeScreenProps;
};

const Screens: React.FC<ScreenProps> = () => {
  const {Navigator, Screen} = createStackNavigator<StackScreenNamesAndProps>();
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
