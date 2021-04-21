import styled from 'styled-components/native';
import {SharkProfileSVG} from '../../assets';
import {ProgressBar} from 'react-native-paper';
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
  width: 100px;
`;
