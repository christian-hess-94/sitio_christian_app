import {
  CategoryDividerContainer,
  CategoryDividerDivider,
  CategoryTitle,
} from './styles';
import React, {useContext} from 'react';
import {Text, useTheme} from 'react-native-paper';

import {ComprasContext} from '../../context/compras.context';
import CustomCard from '../customCard';
import {FlatList} from 'react-native';

interface CategoryDividerProps {
  category: any;
  openEditCompraModal: (compra: any) => void;
}

const CategoryDivider: React.FC<CategoryDividerProps> = ({
  category,
  openEditCompraModal,
}) => {
  const {compras} = useContext(ComprasContext);
  const theme = useTheme();
  return (
    <>
      <CategoryDividerContainer>
        <CategoryDividerDivider />
        <CategoryTitle>{category.name}</CategoryTitle>
        <CategoryDividerDivider />
      </CategoryDividerContainer>
      <FlatList
        data={compras.filter(compra => compra.categoryId === category.id)}
        keyExtractor={compra => compra.id}
        renderItem={({item: compra}) => (
          <CustomCard
            key={compra.id}
            title={compra.name}
            content={
              <>
                <Text>
                  {compra.quantity} / {compra.quantityGoal || 1}
                </Text>
              </>
            }
            actions={[
              {
                color: theme.colors.primary,
                icon: 'pencil',
                onPress: () => openEditCompraModal(compra),
              },
            ]}
          />
        )}
      />
    </>
  );
};

export default CategoryDivider;
