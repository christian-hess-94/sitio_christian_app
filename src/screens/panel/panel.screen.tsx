import {Button, useTheme} from 'react-native-paper';

import Customcard from '../../components/customCard';
import React from 'react';
import {StackScreenProps as SSP} from '@react-navigation/stack';
import {ScreenStyledContainer} from '../../components/ScreenContainer/styles';
import {StackScreenNames} from '..';
import auth from '@react-native-firebase/auth';

export interface PanelScreenProps {}

const PanelScreen: React.FC<SSP<StackScreenNames, 'Panel'>> = ({
  navigation: {reset, navigate},
}) => {
  const theme = useTheme();
  return (
    <ScreenStyledContainer>
      <Customcard
        title="Compras"
        content={
          <>
            <Button
              onPress={() => {
                auth().signOut();
                reset({index: 0, routes: [{name: 'Login'}]});
              }}>
              Logout
            </Button>
            <Button
              onPress={() => {
                navigate('ChangeProfile', {});
              }}>
              Change Profile
            </Button>
          </>
        }
        actions={[
          {
            text: 'Ver tudo',
            onPress: () => navigate('Compras', {}),
            mode: 'contained',
            color: theme.colors.primary,
          },
        ]}
      />
    </ScreenStyledContainer>
  );
};

export default PanelScreen;
