import {Card, IconButton} from 'react-native-paper';

import styled from 'styled-components/native';

export const CustomCardContainer = styled(Card)`
  margin-vertical: 4px;
  margin-horizontal: 8px;
`;
export const CustomCardActions = styled(Card.Actions)`
  flex-direction: row-reverse;
`;
export const CustomCardTitleContainer = styled.View`
  flex-direction: row;
`;
export const CustomCardTitleAction = styled(IconButton)``;
export const CustomCardTitle = styled(Card.Title).attrs<{
  titleColor?: 'primary' | 'error' | 'accent';
}>(({titleColor, theme}) => ({
  titleStyle: {
    color: titleColor ? theme.colors[titleColor] : theme.colors.text,
  },
}))<{
  titleColor?: 'primary' | 'error' | 'accent';
}>`
  flex: 1;
`;
