import styled from 'styled-components/native';
import {LogoSVG} from '../../assets';
import {ProgressBar} from 'react-native-paper';
import {Dimensions} from 'react-native';
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

interface ConfigProgressBarProps {
  taskIndex: number;
  total: number;
  onProgressCompleted: () => void;
}
export const ConfigProgressBar = styled(
  ProgressBar,
).attrs<ConfigProgressBarProps>(({total, taskIndex, onProgressCompleted}) => ({
  progress: taskIndex / total,
  color: '#fff',
  onAnimationEnd: taskIndex === total && onProgressCompleted(),
}))<ConfigProgressBarProps>`
  width: ${Dimensions.get('screen').width * 0.7}px;
  height: ${({theme}) => theme.spacings.medium}px;
  border-radius: ${({theme}) => theme.spacings.medium}px;
`;
