import styled from 'styled-components/native';

export const CategoryDividerContainer = styled.View`
  /* justify-content: center; */
  flex-direction: row;
  margin-top: 16px;
  margin-left: 16px;
  align-items: center;
`;
export const CategoryDividerDivider = styled.View`
  justify-content: center;
  flex: 1;
  height: 1px;
  background-color: ${({theme}) => theme.colors.text};
  margin-horizontal: 16px;
`;
