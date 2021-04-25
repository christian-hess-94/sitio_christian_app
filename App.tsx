import React from 'react';
import CodePush, {CodePushOptions} from 'react-native-code-push';
import Screens from './src/screens';
import UserContextProvider from './src/context/user.context';
const App = () => {
  return (
    <UserContextProvider>
      <Screens />
    </UserContextProvider>
  );
};
const codePushOptions: CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};
export default CodePush(codePushOptions)(App);
