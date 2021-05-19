import {Button, Menu, Text, TextInput, useTheme} from 'react-native-paper';
import React, {useContext, useState} from 'react';

import {CategoryContext} from '../context/categories.context';
import {CreateCompraSchema} from '../schemas/firestore/compra/compra.schema';
import Customcard from '../components/customCard';
import {StyledModalContainer} from './addCategory.styles';
import {addCompra} from '../schemas/firestore/compra/compra.firestore';
import {useFormik} from 'formik';

interface AddCompraFormProps {
  onDismissModal: () => void;
}

const AddCompra: React.FC<AddCompraFormProps> = ({onDismissModal}) => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const theme = useTheme();
  const {categories} = useContext(CategoryContext);
  const {
    values: {name, category, quantity},
    handleChange,
    handleSubmit,
    setFieldValue,
    errors,
    resetForm,
  } = useFormik({
    initialValues: {name: '', quantity: '', category: {}},
    onSubmit: async () => {
      await addCompra({name, categoryId: category?.id, quantity});
      resetForm();
      onDismissModal();
    },
    validationSchema: CreateCompraSchema,
  });
  return (
    <StyledModalContainer>
      <Customcard
        title="Adicionar Compra"
        content={
          <>
            <TextInput
              value={name}
              onChangeText={handleChange('name')}
              mode="outlined"
              placeholder="Nome da compra"
            />
            <TextInput
              value={quantity}
              mode="outlined"
              onChangeText={handleChange('quantity')}
              placeholder="Quantidade"
              keyboardType="numeric"
              autoCompleteType="off"
            />
            <Menu
              visible={visibleMenu}
              onDismiss={() => setVisibleMenu(false)}
              anchor={
                <Button
                  color={theme.colors.text}
                  onPress={() => setVisibleMenu(true)}>
                  {category?.name
                    ? `Categoria: ${category?.name}`
                    : 'Escolher categoria'}
                </Button>
              }>
              <Menu.Item
                onPress={() => {
                  setFieldValue('category', {});
                  setVisibleMenu(false);
                }}
                title="Limpar escolha"
              />
              {categories.map((cat, index) => (
                <Menu.Item
                  key={index}
                  onPress={() => {
                    setFieldValue('category', cat);
                    setVisibleMenu(false);
                  }}
                  title={cat.name}
                />
              ))}
            </Menu>
            {errors.name && <Text>{errors.name}</Text>}
            {errors.quantity && <Text>{errors.quantity}</Text>}
            {errors.category && <Text>{errors.category.name}</Text>}
            <Button onPress={handleSubmit}>Adicionar compra</Button>
          </>
        }
      />
    </StyledModalContainer>
  );
};

export default AddCompra;
