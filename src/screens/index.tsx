import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import LoginScreen, {LoginScreenProps} from './home.screen';
import SplashScreen, {SplashScreenProps} from './splash/splash.screen';

interface ScreenProps {}

export type StackScreenNames = {
  Splash: SplashScreenProps;
  Login: LoginScreenProps;
  Pagina: undefined;
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
      <Screen
        name="Pagina"
        options={{title: 'Página que vai sumir'}}
        component={Paginaquevaisumir}
      />
    </Navigator>
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
