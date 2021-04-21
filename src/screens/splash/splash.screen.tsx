import React, {useEffect} from 'react';
import {AppLogo, SplashScreenContainer} from './splash.styles';
import {StackScreenNames} from '..';
import {StackScreenProps as SSP} from '@react-navigation/stack';
import {Button} from 'react-native-paper';
import {AsyncTask, execTasks} from '../../utils/asyncTask.util';
import {
  fetchAndActivateConfig,
  setRemoteConfigDefaults,
} from '../../tasks/remoteConfig.tasks';
export interface SplashScreenProps {}

const SplashScreen: React.FC<SSP<StackScreenNames, 'Splash'>> = ({
  navigation: {reset},
}) => {
  const tasks: AsyncTask[] = [
    {
      name: 'Set Remote Config Defaults',
      task: setRemoteConfigDefaults,
      isAsync: true,
    },
    {
      name: 'Fetch and Activate Config Defaults',
      task: fetchAndActivateConfig,
      isAsync: true,
    },
  ];

  useEffect(() => {
    execTasks(
      tasks,
      () => console.log('##### Iniciou array de tasks #####'),
      () => reset({index: 0, routes: [{name: 'Login'}]}),
    );
  });
  return (
    <SplashScreenContainer>
      <AppLogo />
      <Button onPress={() => reset({index: 0, routes: [{name: 'Login'}]})}>
        Ir para Home
      </Button>
    </SplashScreenContainer>
  );
};

export default SplashScreen;
