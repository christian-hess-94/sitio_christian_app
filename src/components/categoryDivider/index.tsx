import {
  CategoryDividerContainer,
  CategoryDividerDivider,
  CategoryTitle,
} from './styles';

import React from 'react';

interface CategoryDividerProps {
  category: any;
}

const CategoryDivider: React.FC<CategoryDividerProps> = ({category}) => {
  return (
    <CategoryDividerContainer>
      <CategoryDividerDivider />
      <CategoryTitle>{category.name}</CategoryTitle>
      <CategoryDividerDivider />
    </CategoryDividerContainer>
  );
};

export default CategoryDivider;
