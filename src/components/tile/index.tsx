import {TileContainer, TileTitle} from './styles';

import React from 'react';

interface TileProps {
  title: string;
  onPress: () => void;
}

const Tile: React.FunctionComponent<TileProps> = ({title, onPress}) => {
  return (
    <TileContainer onPress={onPress}>
      <TileTitle>{title}</TileTitle>
    </TileContainer>
  );
};

export default Tile;
