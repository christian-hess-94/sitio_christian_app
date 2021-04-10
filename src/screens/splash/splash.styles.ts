import styled from 'styled-components/native';
import {SharkProfileSVG} from '../../assets';

export const SplashScreenContainer = styled.SafeAreaView`
  background-color: ${({theme}) => theme.colors.secondary};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const AppLogo = styled(SharkProfileSVG).attrs(({theme}) => ({
  height: 140,
  width: 140,
  color: theme.colors.terciary,
}))``;
