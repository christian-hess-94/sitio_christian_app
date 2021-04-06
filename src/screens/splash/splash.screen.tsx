import React from 'react';
import {AppLogo, SplashScreenContainer} from './splash.styles';
import {StackScreenNames} from '..';
import {StackScreenProps as SSP} from '@react-navigation/stack';
import {Button} from 'react-native-paper';

export interface SplashScreenProps {}

const SplashScreen: React.FC<SSP<StackScreenNames, 'Splash'>> = ({
  navigation: {navigate},
}) => {
  return (
    <SplashScreenContainer>
      <AppLogo />
      <Button onPress={() => navigate('Home', {})}>Go home</Button>
    </SplashScreenContainer>
  );
};

export default SplashScreen;
