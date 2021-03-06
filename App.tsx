import CodePush, {CodePushOptions} from 'react-native-code-push';

import CategoryContextProvider from './src/context/categories.context';
import CompraContextProvider from './src/context/compras.context';
import React from 'react';
import Screens from './src/screens';
import UserContextProvider from './src/context/user.context';

const App = () => {
  return (
    <CategoryContextProvider>
      <UserContextProvider>
        <CompraContextProvider>
          <Screens />
        </CompraContextProvider>
      </UserContextProvider>
    </CategoryContextProvider>
  );
};
const codePushOptions: CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};
export default CodePush(codePushOptions)(App);
