import {CategoryDividerContainer, CategoryDividerDivider} from './styles';
import React, {useContext} from 'react';

import {ComprasContext} from '../../context/compras.context';
import CustomCard from '../customCard';
import {FlatList} from 'react-native';
import {Title} from 'react-native-paper';

interface CategoryDividerProps {
  category: any;
  isShoppingList: boolean;
  openEditCompraModal: (compra: any) => void;
}

const CategoryDivider: React.FC<CategoryDividerProps> = ({
  category,
  openEditCompraModal,
  isShoppingList,
}) => {
  const {compras} = useContext(ComprasContext);
  const filteredCompras = compras
    .filter(compra => {
      return isShoppingList
        ? compra.categoryId === category.id && compra.quantity === '0'
        : compra.categoryId === category.id;
    })
    .sort((a, b) => (a.name > b.name ? 1 : -1));
  return (
    <>
      {filteredCompras.length > 0 && (
        <CategoryDividerContainer>
          <Title>{category.name}</Title>
          <CategoryDividerDivider />
        </CategoryDividerContainer>
      )}
      <FlatList
        data={filteredCompras}
        keyExtractor={compra => compra.id}
        renderItem={({item: compra}) => (
          <CustomCard
            key={compra.id}
            title={`${compra.name} (${compra.quantity} / ${compra.quantityGoal})`}
            titleColor={compra.quantity === '0' ? 'accent' : undefined}
            titleAction={{
              icon: 'pencil',
              onPress: () => openEditCompraModal(compra),
            }}
          />
        )}
      />
    </>
  );
};

export default CategoryDivider;
