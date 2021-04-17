/* eslint-disable no-shadow */
import {StackScreenProps as SSP} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {StackScreenNames} from '.';
import remoteConfigDefaultValues, {
  remoteConfigDefaultParams,
  remoteConfigEnum,
} from '../defaults/remoteConfig';
import remoteConfig from '@react-native-firebase/remote-config';

export interface LoginScreenProps {}

const LoginScreen: React.FC<SSP<StackScreenNames, 'Login'>> = ({
  navigation: {navigate},
}) => {
  const [
    {teste_parametro, pagina_ativa},
    setRemoteConfigData,
  ] = useState<remoteConfigDefaultParams>(remoteConfigDefaultValues);

  useEffect(() => {
    const connectRemoteConfig = async () => {
      await remoteConfig().setDefaults(remoteConfigDefaultValues);
      console.log('Setou defaults');
      await remoteConfig().fetch(5);
      await remoteConfig().activate();
      const teste_parametro = remoteConfig()
        .getValue(remoteConfigEnum.teste_parametro)
        .asString();
      const pagina_ativa = remoteConfig()
        .getValue(remoteConfigEnum.pagina_ativa)
        .asBoolean();
      setRemoteConfigData({teste_parametro, pagina_ativa});
    };
    connectRemoteConfig();
  }, []);

  return (
    <View>
      <Text>Home Screen {pagina_ativa.toString()}</Text>
      {pagina_ativa && (
        <Button onPress={() => navigate('Pagina')}>{teste_parametro}</Button>
      )}
    </View>
  );
};

export default LoginScreen;
