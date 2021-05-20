import ChangeProfileScreen, {
  ChangeProfileScreenProps,
} from './changeProfile/changeProfile.screen';
import DespensaScreen, {DespensaScreenProps} from './despensa';
import LoginScreen, {LoginScreenProps} from './login/login.screen';
import PanelScreen, {PanelScreenProps} from './panel/panel.screen';
import React, {useContext} from 'react';
import SplashScreen, {SplashScreenProps} from './splash/splash.screen';

import AvailableThemes from '../theme';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {UserContext} from '../context/user.context';
import {createStackNavigator} from '@react-navigation/stack';
import {useColorScheme} from 'react-native';

interface ScreenProps {}

export type StackScreenNames = {
  Splash: SplashScreenProps;
  Login: LoginScreenProps;
  Panel: PanelScreenProps;
  ChangeProfile: ChangeProfileScreenProps;
  Despensa: DespensaScreenProps;
};

const Screens: React.FC<ScreenProps> = () => {
  const {Navigator, Screen} = createStackNavigator<StackScreenNames>();
  const {
    user: {colorScheme},
  } = useContext(UserContext);
  const phoneColorScheme = useColorScheme();
  return (
    <NavigationContainer
      theme={AvailableThemes[colorScheme || phoneColorScheme || 'light']}>
      <StyledThemeProvider
        theme={AvailableThemes[colorScheme || phoneColorScheme || 'light']}>
        <PaperProvider
          theme={AvailableThemes[colorScheme || phoneColorScheme || 'light']}>
          <Navigator initialRouteName="Splash" mode="modal">
            <Screen
              name="Splash"
              component={SplashScreen}
              options={{animationEnabled: false, headerShown: false}}
            />
            <Screen
              name="Login"
              options={{title: 'Login', headerShown: false}}
              component={LoginScreen}
            />
            <Screen
              name="Panel"
              options={{
                title: 'Painel',
              }}
              component={PanelScreen}
            />
            <Screen
              name="ChangeProfile"
              options={{title: 'Change Profile'}}
              component={ChangeProfileScreen}
            />
            <Screen
              name="Despensa"
              options={{
                title: 'Despensa',
              }}
              component={DespensaScreen}
            />
          </Navigator>
        </PaperProvider>
      </StyledThemeProvider>
    </NavigationContainer>
  );
};
export default Screens;
