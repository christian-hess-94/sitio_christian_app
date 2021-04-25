import React, {useEffect} from 'react';
import {useRef} from 'react';
import {Animated, Dimensions} from 'react-native';
import styled from 'styled-components/native';

const PROGRESS_BAR_WIDTH = Dimensions.get('screen').width - 200;

interface ProgressBarProps {
  current: number;
  max: number;
  onAnimationEnd: () => void;
}
interface ProgressBarFillProps {
  current: any;
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
  const {onAnimationEnd, current, max} = props;
  const progressAnimation = useRef(new Animated.Value(current));
  useEffect(() => {
    Animated.timing(progressAnimation.current, {
      toValue: (current / max) * PROGRESS_BAR_WIDTH,
      duration: 1200,
      useNativeDriver: false,
    }).start(() => onAnimationEnd());
  }, [current, onAnimationEnd, max]);
  return (
    <PBBackground>
      <PBFill
        current={progressAnimation.current}
        style={{width: progressAnimation?.current || 0}}
      />
    </PBBackground>
  );
};

export default ProgressBar;
