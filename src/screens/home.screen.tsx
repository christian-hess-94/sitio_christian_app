import {StackScreenProps as SSP} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {StackScreenNames} from '.';

export interface LoginScreenProps {}

const LoginScreen: React.FC<SSP<StackScreenNames, 'Login'>> = ({}) => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default LoginScreen;
