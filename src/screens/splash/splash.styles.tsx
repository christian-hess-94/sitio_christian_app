import React, {useEffect, useRef} from 'react';
import {Dimensions, Animated} from 'react-native';
import styled from 'styled-components/native';
import {LogoSVG} from '../../assets';
export const SplashScreenContainer = styled.SafeAreaView`
  background-color: ${({theme}) => theme.colors.secondary};
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

const PROGRESS_BAR_WIDTH = Dimensions.get('screen').width;

interface ProgressBackgroundProps {
  taskIndex: number;
  tasksToDo: number;
  onAnimationEnd: () => void;
}
interface ProgressBackgroundFillProps {
  taskIndex: any;
}

const PBGBackground = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  height: 100%;
  position: absolute;
`;
const PBGFill = styled(Animated.View)<ProgressBackgroundFillProps>`
  height: 100%;
`;

const ProgressBackground: React.FC<ProgressBackgroundProps> = props => {
  const {onAnimationEnd, taskIndex, tasksToDo} = props;
  const progressAnimation = useRef(new Animated.Value(taskIndex));
  useEffect(() => {
    Animated.timing(progressAnimation.current, {
      toValue: (taskIndex / tasksToDo) * PROGRESS_BAR_WIDTH,
      duration: 1200,
      useNativeDriver: false,
    }).start(() => onAnimationEnd());
  }, [taskIndex, onAnimationEnd, tasksToDo]);
  return (
    <PBGBackground>
      <PBGFill
        taskIndex={progressAnimation.current}
        style={{
          width: progressAnimation?.current || 0,
        }}
      />
    </PBGBackground>
  );
};

export default ProgressBackground;
