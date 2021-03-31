import React from 'react';
import {Text} from 'react-native';
import {CardContainer} from './styles';

interface CardProps {}

const Card: React.FC<CardProps> = () => {
  return (
    <CardContainer>
      <Text>Teste</Text>
    </CardContainer>
  );
};

export default Card;
