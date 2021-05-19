import {Button, useTheme} from 'react-native-paper';

import CustomCard from '../../components/customCard';
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
      <CustomCard
        title="Compras"
        content={<></>}
        actions={[
          {
            text: 'Ver tudo',
            onPress: () => navigate('Compras', {}),
            mode: 'contained',
            color: theme.colors.primary,
          },
        ]}
      />
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
    </ScreenStyledContainer>
  );
};

export default PanelScreen;
