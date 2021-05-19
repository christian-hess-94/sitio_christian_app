import styled from 'styled-components/native';

export const CategoryDividerContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;
export const CategoryDividerDivider = styled.View`
  justify-content: center;
  flex: 1;
  height: 1px;
  background-color: ${({theme}) => theme.colors.text};
  margin-horizontal: 16px;
`;
export const CategoryTitle = styled.Text`
  text-align: center;
  font-size: 24px;
`;
