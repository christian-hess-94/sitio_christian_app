import styled from 'styled-components/native';

export const TileContainer = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.primary};
  /* width: 200px; */
  /* justify-content: center; */
  /* align-items: center; */
`;
export const TileTitle = styled.Text`
  background-color: ${({theme}) => theme.colors.primary};
  /* height: 100px; */
  align-self: center;
  position: relative;
  bottom: 0;
  right: 0;
`;
