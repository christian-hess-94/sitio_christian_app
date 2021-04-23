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
const PROGRESS_BAR_HEIGHT = Dimensions.get('screen').height;

interface ProgressBackgroundProps {
  taskIndex: number;
  tasksToDo: number;
  onAnimationEnd: () => void;
}
interface ProgressBackgroundFillProps {
  taskIndex: any;
}

const PBGBackground = styled(Animated.View)`
  background-color: ${({theme}) => theme.colors.primary};
  position: absolute;
`;
const PBGFill = styled(Animated.View)<ProgressBackgroundFillProps>``;

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
    <PBGBackground
      style={{
        borderRadius: progressAnimation?.current.interpolate({
          inputRange: [0, PROGRESS_BAR_WIDTH],
          outputRange: [PROGRESS_BAR_HEIGHT, 0],
        }),
      }}>
      <PBGFill
        taskIndex={progressAnimation.current}
        style={{
          width: progressAnimation?.current.interpolate({
            inputRange: [0, PROGRESS_BAR_WIDTH],
            outputRange: [0, PROGRESS_BAR_HEIGHT],
          }),
          height: progressAnimation?.current.interpolate({
            inputRange: [0, PROGRESS_BAR_WIDTH],
            outputRange: [0, PROGRESS_BAR_HEIGHT],
          }),
        }}
      />
    </PBGBackground>
  );
};

export default ProgressBackground;
