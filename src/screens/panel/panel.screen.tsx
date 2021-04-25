import React from 'react';
import {StackScreenProps as SSP} from '@react-navigation/stack';
import {StackScreenNames} from '..';
import {Text} from 'react-native';

export interface PanelScreenProps {}

const PanelScreen: React.FC<SSP<StackScreenNames, 'Panel'>> = () => {
  return <Text>Panel Screen</Text>;
};

export default PanelScreen;
