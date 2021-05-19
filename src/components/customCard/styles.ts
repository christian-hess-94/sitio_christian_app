import {Card} from 'react-native-paper';
import styled from 'styled-components/native';

export const CustomCardContainer = styled(Card)`
  margin: 8px;
`;
export const CustomCardActions = styled(Card.Actions)`
  flex-direction: row-reverse;
`;
export const CustomCardTitle = styled(Card.Title).attrs<{
  titleColor?: 'primary' | 'error' | 'accent';
}>(({titleColor, theme}) => ({
  titleStyle: {
    color: titleColor ? theme.colors[titleColor] : theme.colors.text,
  },
}))<{
  titleColor?: 'primary' | 'error' | 'accent';
}>``;
