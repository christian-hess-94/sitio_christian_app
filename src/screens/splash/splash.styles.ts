import styled from 'styled-components/native';
import {LogoSVG} from '../../assets';
export const SplashScreenContainer = styled.SafeAreaView`
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const AppLogo = styled(LogoSVG).attrs(({theme}) => ({
  height: 240,
  width: 240,
  color: theme.colors.secondary,
}))``;
