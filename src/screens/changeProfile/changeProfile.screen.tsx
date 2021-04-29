import React, {useContext} from 'react';

import {ScreenStyledContainer} from '../../components/ScreenContainer/styles';
import {Text} from 'react-native-paper';
import {UserContext} from '../../context/user.context';

export interface ChangeProfileScreenProps {}

const ChangeProfileScreen: React.FunctionComponent<ChangeProfileScreenProps> = () => {
  const {user} = useContext(UserContext);
  return (
    <ScreenStyledContainer>
      <Text>{JSON.stringify(user)}</Text>
    </ScreenStyledContainer>
  );
};

export default ChangeProfileScreen;
