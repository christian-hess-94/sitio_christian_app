import {StackScreenProps as SSP} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {StackScreenNames} from '.';
import {UserContext} from '../context/user.context';

export interface LoginScreenProps {}

const LoginScreen: React.FC<SSP<StackScreenNames, 'Login'>> = ({}) => {
  const {
    user: {theme},
  } = useContext(UserContext);
  return (
    <View>
      <Text>Home Screen {theme}</Text>
    </View>
  );
};

export default LoginScreen;
