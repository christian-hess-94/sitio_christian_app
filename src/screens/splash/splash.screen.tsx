/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  AppLogo,
  ConfigProgressBar,
  SplashScreenContainer,
} from './splash.styles';
import {StackScreenNames} from '..';
import {StackScreenProps as SSP} from '@react-navigation/stack';
import {Text} from 'react-native-paper';
import {AsyncTask, execTasks} from '../../utils/asyncTask.util';
import {
  fetchAndActivateConfig,
  setRemoteConfigDefaults,
} from '../../tasks/remoteConfig.tasks';
export interface SplashScreenProps {}

const SplashScreen: React.FC<SSP<StackScreenNames, 'Splash'>> = ({
  navigation: {reset},
}) => {
  const [taskIndex, setTasksDone] = useState(0);
  const tasks: AsyncTask[] = [
    {
      name: 'Set Remote Config Defaults',
      task: setRemoteConfigDefaults,
      isAsync: true,
      onComplete: () => setTasksDone(taskIndex + 1),
    },
    {
      name: 'Fetch and Activate Config Defaults',
      task: fetchAndActivateConfig,
      isAsync: true,
      onComplete: () => setTasksDone(taskIndex + 1),
    },
  ];
  const [tasksToDo] = useState(tasks.length);

  useEffect(() => {
    if (taskIndex < tasksToDo) {
      execTasks({
        tasks,
        taskIndex,
      });
    }
  }, [taskIndex]);
  return (
    <SplashScreenContainer>
      <AppLogo />
      <Text>
        {taskIndex} / {tasksToDo}
      </Text>
      <ConfigProgressBar
        total={tasksToDo}
        taskIndex={taskIndex}
        onProgressCompleted={() => reset({index: 0, routes: [{name: 'Login'}]})}
      />
    </SplashScreenContainer>
  );
};

export default SplashScreen;
