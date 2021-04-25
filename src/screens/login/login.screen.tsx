import React, {useContext} from 'react';
import {Text, View} from 'react-native';

import {StackScreenProps as SSP} from '@react-navigation/stack';
import {StackScreenNames} from '..';
import {UserContext} from '../../context/user.context';

export interface LoginScreenProps {}

const LoginScreen: React.FC<SSP<StackScreenNames, 'Login'>> = ({}) => {
  const {user} = useContext(UserContext);
  return (
    <View>
      <Text>Login Screen {JSON.stringify(user)}</Text>
    </View>
  );
};

export default LoginScreen;
