import {Button} from 'react-native-paper';
import React from 'react';
import {StackScreenProps as SSP} from '@react-navigation/stack';
import {StackScreenNames} from '..';
import auth from '@react-native-firebase/auth';

export interface PanelScreenProps {}

const PanelScreen: React.FC<SSP<StackScreenNames, 'Panel'>> = ({
  navigation: {reset},
}) => {
  return (
    <Button
      onPress={() => {
        auth().signOut();
        reset({index: 0, routes: [{name: 'Login'}]});
      }}>
      Logout
    </Button>
  );
};

export default PanelScreen;
