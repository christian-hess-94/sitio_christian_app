import {Button, Menu, Text, TextInput, useTheme} from 'react-native-paper';
import React, {useContext, useState} from 'react';

import {CategoryContext} from '../context/categories.context';
import {CreateCompraSchema} from '../schemas/firestore/compra/compra.schema';
import CustomCard from '../components/customCard';
import {updateCompra} from '../schemas/firestore/compra/compra.firestore';
import {useFormik} from 'formik';

interface EditCompraFormProps {
  compraToEdit: any;
  onDismissModal: () => void;
}

const EditCompra: React.FC<EditCompraFormProps> = ({
  onDismissModal,
  compraToEdit,
}) => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const theme = useTheme();
  const {categories} = useContext(CategoryContext);
  const {
    values: {name, category, quantity, quantityGoal},
    handleChange,
    handleSubmit,
    setFieldValue,
    errors,
    resetForm,
  } = useFormik({
    initialValues: {
      name: compraToEdit.name,
      quantity: compraToEdit.quantity,
      quantityGoal: compraToEdit.quantityGoal,
      category: categories.filter(
        categ => categ.id === compraToEdit.categoryId,
      )[0],
    },
    onSubmit: async () => {
      await updateCompra(compraToEdit.id, {
        name,
        categoryId: category?.id,
        quantity,
        quantityGoal,
      });
      resetForm();
      onDismissModal();
    },
    validationSchema: CreateCompraSchema,
  });
  return (
    <CustomCard
      title="Editar Compra"
      content={
        <>
          <TextInput
            value={name}
            onChangeText={handleChange('name')}
            mode="outlined"
            placeholder="Nome da compra"
          />
          {errors.name && <Text>{errors.name}</Text>}
          <TextInput
            value={quantity}
            mode="outlined"
            onChangeText={handleChange('quantity')}
            placeholder="Quantidade atual"
            keyboardType="numeric"
            autoCompleteType="off"
          />
          {errors.quantity && <Text>{errors.quantity}</Text>}
          <TextInput
            value={quantityGoal}
            mode="outlined"
            onChangeText={handleChange('quantityGoal')}
            placeholder="Quantidade máxima"
            keyboardType="numeric"
            autoCompleteType="off"
          />
          {errors.quantityGoal && <Text>{errors.quantityGoal}</Text>}
          <Menu
            visible={visibleMenu}
            onDismiss={() => setVisibleMenu(false)}
            anchor={
              <Button
                color={
                  category?.name ? theme.colors.primary : theme.colors.error
                }
                onPress={() => setVisibleMenu(true)}
                uppercase={false}>
                {category.name
                  ? `Categoria: ${category.name}`
                  : 'Toque para escolher a categoria'}
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
          {errors.category && <Text>{errors.category.name}</Text>}
        </>
      }
      actions={[
        {
          text: 'Editar compra',
          onPress: handleSubmit,
          color: theme.colors.primary,
        },
      ]}
    />
  );
};

export default EditCompra;
