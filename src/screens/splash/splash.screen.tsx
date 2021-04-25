/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import ProgressBackground, {
  AppLogo,
  SplashScreenContainer,
} from './splash.styles';
import {StackScreenNames} from '..';
import {StackScreenProps as SSP} from '@react-navigation/stack';
import {AsyncTask, execTask} from '../../utils/asyncTask.util';
import {
  fetchAndActivateConfig,
  setRemoteConfigDefaults,
} from '../../tasks/remoteConfig.tasks';
export interface SplashScreenProps {}

const SplashScreen: React.FC<SSP<StackScreenNames, 'Splash'>> = ({
  navigation: {reset},
}) => {
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
  ];

  const [tasksToDo] = useState(tasks.length);

  useEffect(() => {
    if (taskIndex < tasksToDo) {
      execTask(tasks[taskIndex]);
    }
  }, [taskIndex]);

  const initApp = () => {
    if (taskIndex >= tasks.length) {
      reset({index: 0, routes: [{name: 'Login'}]});
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
