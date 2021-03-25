import React from 'react';
import {View, Text} from 'react-native';

export const Card = () => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        height: 41,
        alignItems: 'center',
        borderRadius: 24,
        margin: 32,
      }}>
      <Text>TEXTO</Text>
    </View>
  );
};
