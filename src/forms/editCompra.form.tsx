import {Button, Menu, Text, TextInput, useTheme} from 'react-native-paper';
import React, {useContext, useState} from 'react';

import {CategoryContext} from '../context/categories.context';
import {ComprasContext} from '../context/compras.context';
import {CreateCompraSchema} from '../schemas/firestore/compra/compra.schema';
import CustomCard from '../components/customCard';
import {updateCompra} from '../schemas/firestore/compra/compra.firestore';
import {useFormik} from 'formik';

interface EditCompraFormProps {
  onDismissModal: () => void;
}

const EditCompra: React.FC<EditCompraFormProps> = ({onDismissModal}) => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const theme = useTheme();
  const {categories} = useContext(CategoryContext);
  const {selectedCompra} = useContext(ComprasContext);
  const {
    values: {name, category, quantity, quantityGoal},
    handleChange,
    handleSubmit,
    setFieldValue,
    errors,
    resetForm,
  } = useFormik({
    initialValues: {
      name: selectedCompra.name,
      quantity: selectedCompra.quantity,
      quantityGoal: selectedCompra.quantityGoal,
      category: categories.filter(
        categ => categ.id === selectedCompra.categoryId,
      )[0],
    },
    onSubmit: async () => {
      await updateCompra(selectedCompra.id, {
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
            label="Nome"
            // placeholder="Nome da compra"
          />
          {errors.name && <Text>{errors.name}</Text>}
          <TextInput
            value={quantity}
            mode="outlined"
            onChangeText={handleChange('quantity')}
            // placeholder="Quantidade atual"
            keyboardType="numeric"
            autoCompleteType="off"
            label="Quantidade atual"
            right={
              <TextInput.Icon
                name="plus"
                onPress={() => {
                  setFieldValue(
                    'quantity',
                    (parseInt(quantity, 10) + 1).toString(),
                  );
                }}
              />
            }
            left={
              <TextInput.Icon
                name="minus"
                onPress={() => {
                  setFieldValue(
                    'quantity',
                    (parseInt(quantity, 10) - 1).toString(),
                  );
                }}
              />
            }
          />
          {errors.quantity && <Text>{errors.quantity}</Text>}
          <TextInput
            value={quantityGoal}
            mode="outlined"
            label="Quantidade desejada"
            onChangeText={handleChange('quantityGoal')}
            // placeholder="Quantidade máxima"
            keyboardType="numeric"
            autoCompleteType="off"
            right={
              <TextInput.Icon
                name="plus"
                onPress={() => {
                  setFieldValue(
                    'quantityGoal',
                    (parseInt(quantityGoal, 10) + 1).toString(),
                  );
                }}
              />
            }
            left={
              <TextInput.Icon
                name="minus"
                onPress={() => {
                  setFieldValue(
                    'quantityGoal',
                    (parseInt(quantityGoal, 10) - 1).toString(),
                  );
                }}
              />
            }
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
          color: undefined,
        },
      ]}
    />
  );
};

export default EditCompra;
