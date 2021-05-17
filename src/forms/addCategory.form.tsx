import {Button, Text, TextInput} from 'react-native-paper';

import Customcard from '../components/customCard';
import React from 'react';
import {StyledModalContainer} from './addCategory.styles';

interface AddCategoryFormProps {}

const AddCategory: React.FC<AddCategoryFormProps> = () => {
  return (
    <StyledModalContainer>
      <Customcard
        title="Adicionar Categoria"
        content={
          <>
            <Text>Categoria</Text>
            <TextInput />
            <Button>Adicionar</Button>
          </>
        }
      />
    </StyledModalContainer>
  );
};

export default AddCategory;
