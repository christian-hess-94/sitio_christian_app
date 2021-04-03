import React from 'react';
import {View, Text} from 'react-native';

export interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
};

export default HomeScreen;
