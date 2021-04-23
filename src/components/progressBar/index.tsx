import React, {useEffect} from 'react';
import {useRef} from 'react';
import {Animated, Dimensions} from 'react-native';
import styled from 'styled-components/native';

const PROGRESS_BAR_WIDTH = Dimensions.get('screen').width - 200;

interface ProgressBarProps {
  taskIndex: number;
  tasksToDo: number;
  onAnimationEnd: () => void;
}
interface ProgressBarFillProps {
  taskIndex: any;
}

const PBBackground = styled.View`
  background-color: white;
  height: 8px;
  width: ${PROGRESS_BAR_WIDTH}px;
`;
const PBFill = styled(Animated.View)<ProgressBarFillProps>`
  background-color: ${({theme}) => theme.colors.terciary};
  height: 100%;
`;

const ProgressBar: React.FC<ProgressBarProps> = props => {
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
    <PBBackground>
      <PBFill
        taskIndex={progressAnimation.current}
        style={{width: progressAnimation?.current || 0}}
      />
    </PBBackground>
  );
};

export default ProgressBar;
