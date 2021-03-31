import React from 'react';
import {SafeAreaView} from 'react-native';

import SharkSVG from './src/assets/icons/profile/001-shark.svg';
const App = () => {
  return (
    <SafeAreaView testID="app-safe-area-view">
      <SharkSVG color="black" />
    </SafeAreaView>
  );
};

export default App;
