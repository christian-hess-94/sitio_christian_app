import {Alert, useColorScheme} from 'react-native';
import {AsyncTask, execTask} from '../../utils/asyncTask.util';
import ProgressBackground, {
  AppLogo,
  SplashScreenContainer,
} from './splash.styles';
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {
  fetchAndActivateConfig,
  setRemoteConfigDefaults,
} from '../../tasks/remoteConfig.tasks';

import {StackScreenProps as SSP} from '@react-navigation/stack';
import {StackScreenNames} from '..';
import {UserContext} from '../../context/user.context';

export interface SplashScreenProps {}

const SplashScreen: React.FC<SSP<StackScreenNames, 'Splash'>> = ({
  navigation: {reset},
}) => {
  const {user, setUser} = useContext(UserContext);
  const {colorScheme, ready, authInfo} = user;
  const phoneColorScheme = useColorScheme();
  const [progress, setProgress] = useState(0);
  const [taskIndex, setTaskIndex] = useState(0);
  const tasks: AsyncTask[] = [
    {
      name: 'Set Remote Config Defaults',
      task: setRemoteConfigDefaults,
      isAsync: true,
      onComplete: () => {
        setTaskIndex(taskIndex + 1);
        setProgress(progress + 100 / tasks.length);
      },
    },
    {
      name: 'Fetch and Activate Config Defaults',
      task: fetchAndActivateConfig,
      isAsync: true,
      onComplete: () => {
        setTaskIndex(taskIndex + 1);
        setProgress(progress + 100 / tasks.length);
      },
    },
    {
      name: 'Verify appTheme and currentTheme',
      task: () => {
        if (phoneColorScheme !== colorScheme) {
          Alert.alert(
            'Temas diferentes',
            `Deseja configurar o app com o mesmo tema do seu celular (${phoneColorScheme})?`,
            [
              {text: `Manter tema ${colorScheme}`, style: 'cancel'},
              {
                text: `Usar tema ${phoneColorScheme}`,
                style: 'default',
                onPress: () =>
                  setUser({...user, colorScheme: phoneColorScheme}),
              },
            ],
          );
          return;
        }
      },
      onComplete: () => {
        setTaskIndex(taskIndex + 1);
        setProgress(progress + 100 / tasks.length);
      },
    },
    {
      name: 'Wait for firebase response',
      task: () => {
        while (!ready) {}
        return;
      },
      onComplete: () => {
        setTaskIndex(taskIndex + 1);
        setProgress(progress + 100 / tasks.length);
      },
    },
  ];

  const [tasksToDo] = useState(tasks.length);

  useEffect(() => {
    if (taskIndex < tasksToDo) {
      execTask(tasks[taskIndex]);
    }
  }, [taskIndex]);

  const initApp = () => {
    if (taskIndex >= tasks.length) {
      if (authInfo) {
        console.log('Usuário já autenticado no Firebase, indo para Painel');
        reset({index: 0, routes: [{name: 'Panel'}]});
      } else {
        console.log('Usuário não autenticado no Firebase, indo para Login');
        reset({index: 0, routes: [{name: 'Login'}]});
      }
    }
  };
  return (
    <SplashScreenContainer>
      <ProgressBackground
        taskIndex={taskIndex}
        tasksToDo={tasksToDo}
        onAnimationEnd={initApp}
      />
      <AppLogo />
    </SplashScreenContainer>
  );
};

export default SplashScreen;
