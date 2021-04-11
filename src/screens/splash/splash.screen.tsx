import React from 'react';
import {AppLogo, SplashScreenContainer} from './splash.styles';
import {StackScreenNames} from '..';
import {StackScreenProps as SSP} from '@react-navigation/stack';
import {Button} from 'react-native-paper';
import remoteConfig from '@react-native-firebase/remote-config';
export interface SplashScreenProps {}

const SplashScreen: React.FC<SSP<StackScreenNames, 'Splash'>> = ({
  navigation: {reset},
}) => {
  return (
    <SplashScreenContainer>
      <AppLogo />
      <Button onPress={() => reset({index: 0, routes: [{name: 'Login'}]})}>
        Go home
      </Button>
    </SplashScreenContainer>
  );
};

export default SplashScreen;
