import {Button, Card} from 'react-native-paper';

import styled from 'styled-components/native';

const {Actions} = Card;
export const LoginScreenPage = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  align-self: center;
  justify-content: center;
  padding: ${({theme}) => theme.spacings.huge}px;
`;
export const LoginActions = styled(Actions)`
  flex-direction: row-reverse;
  margin: 10px;
`;
export const LoginButton = styled(Button).attrs(({theme}) => ({
  color: theme.colors.primary,
  mode: 'contained',
  labelStyle: {
    color: theme.colors.invertedText,
  },
}))`
  padding-horizontal: 8px;
`;
export const ForgotPasswordButton = styled(Button).attrs(({theme}) => ({
  color: theme.colors.terciary,
}))``;
