import React from 'react';
import {View, Text} from 'react-native';
import {SplashScreenContainer} from './splash.styles';

export interface SplashScreenProps {}

const SplashScreen: React.FC<SplashScreenProps> = () => {
  return <SplashScreenContainer></SplashScreenContainer>;
};

export default SplashScreen;
