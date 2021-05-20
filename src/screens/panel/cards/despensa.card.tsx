import CustomCard from '../../../components/customCard';
import React from 'react';
import {useNavigation} from '@react-navigation/core';

interface DespensaCardProps {}

const DespensaCard: React.FunctionComponent<DespensaCardProps> = () => {
  const {navigate} = useNavigation();
  return (
    <CustomCard
      title="Despensa"
      content={<></>}
      actions={[
        {
          text: 'Ver despensa',
          onPress: () => navigate('Despensa', {isShoppingList: false}),
          mode: 'text',
          color: 'primary',
        },
        {
          text: 'Lista de compras',
          onPress: () => navigate('Despensa', {isShoppingList: true}),
          mode: 'contained',
          color: 'primary',
        },
      ]}
    />
  );
};

export default DespensaCard;
