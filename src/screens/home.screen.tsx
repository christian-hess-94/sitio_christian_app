import {StackScreenProps as SSP} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {StackScreenNames} from '.';

export interface HomeScreenProps {}

const HomeScreen: React.FC<SSP<StackScreenNames, 'Home'>> = () => {
  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
};

export default HomeScreen;
