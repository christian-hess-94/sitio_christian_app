import React, {useEffect, useState} from 'react';
import {AppLogo, SplashScreenContainer} from './splash.styles';
import {StackScreenNames} from '..';
import {StackScreenProps as SSP} from '@react-navigation/stack';
import {Button} from 'react-native-paper';
import remoteConfig from '@react-native-firebase/remote-config';
export interface SplashScreenProps {}

const SplashScreen: React.FC<SSP<StackScreenNames, 'Splash'>> = ({
  navigation: {reset},
}) => {
  const [remoteConfigData, setRemoteConfigData] = useState('');
  const connectRemoteConfig = async () => {
    await remoteConfig().setDefaults({
      teste_parametro: 'disabled',
    });
    console.log('Setou defaults');
    await remoteConfig().fetch(10);
    await remoteConfig().activate();
    // if (fetchedRemotely) {
    //   console.log('Configs were retrieved from the backend and activated.');
    // } else {
    //   console.log(
    //     'No configs were fetched from the backend, and the local configs were already activated',
    //   );
    // }
    const teste_parametro = remoteConfig()
      .getValue('teste_parametro')
      .asString();
    const source = remoteConfig().getValue('teste_parametro').getSource();
    setRemoteConfigData(teste_parametro + ' ' + source);
  };
  useEffect(() => {
    connectRemoteConfig();
  }, []);
  return (
    <SplashScreenContainer>
      <AppLogo />
      {/* <Button onPress={() => reset({index: 0, routes: [{name: 'Login'}]})}> */}
      <Button onPress={() => remoteConfig().fetch(10)}>
        {remoteConfigData}
      </Button>
    </SplashScreenContainer>
  );
};

export default SplashScreen;
