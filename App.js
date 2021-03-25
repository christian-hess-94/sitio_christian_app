/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Dimensions,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Card} from './src/card';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const window = Dimensions.get('screen');
  const windowHeight = window.height;
  const windowWidth = window.width;
  const windowScale = window.scale;
  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>WIDTH SCREEN {windowWidth}</Text>
      <Text>HEIGHT SCREEN {windowHeight}</Text>
      <Text>SCALE SCREEN {windowScale}</Text>
      <Text>WIDTH SCREEN REAL {windowWidth * window.scale}</Text>
      <Text>HEIGHT SCREEN REAL {windowHeight * window.scale}</Text>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Card />
    </SafeAreaView>
  );
};

export default App;
