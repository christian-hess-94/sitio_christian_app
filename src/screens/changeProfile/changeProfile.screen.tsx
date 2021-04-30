import {Button, Text} from 'react-native-paper';
import React, {useContext} from 'react';

import {StackScreenProps as SSP} from '@react-navigation/stack';
import {ScreenStyledContainer} from '../../components/ScreenContainer/styles';
import {StackScreenNames} from '..';
import {UserContext} from '../../context/user.context';
import {updateUser} from '../../schemas/firestore/users.firestore';

export interface ChangeProfileScreenProps {}

const ChangeProfileScreen: React.FC<SSP<StackScreenNames, 'ChangeProfile'>> = ({
  navigation: {reset},
}) => {
  const {user} = useContext(UserContext);
  const {profileInfo} = user;
  return (
    <ScreenStyledContainer>
      <Text>{JSON.stringify(user)}</Text>
      <Button
        onPress={async () => {
          if (profileInfo) {
            const uid = profileInfo.uid;
            const hasUpdated = await updateUser(uid, {
              ...profileInfo,
              isActive: true,
            });
            if (hasUpdated) {
              reset({index: 0, routes: [{name: 'Panel'}]});
            } else {
              reset({index: 0, routes: [{name: 'Login'}]});
            }
          }
        }}>
        Activate account
      </Button>
    </ScreenStyledContainer>
  );
};

export default ChangeProfileScreen;
