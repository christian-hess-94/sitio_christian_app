import {Button, Text, TextInput} from 'react-native-paper';
import React, {useContext} from 'react';

import {CreateCategorySchema} from '../schemas/firestore/category/category.schema';
import Customcard from '../components/customCard';
import {StyledModalContainer} from './addCategory.styles';
import {UserContext} from '../context/user.context';
import {addCategory} from '../schemas/firestore/category/category.firestore';
import {useFormik} from 'formik';

interface AddCategoryFormProps {
  onDismissModal: () => void;
}

const AddCategory: React.FC<AddCategoryFormProps> = ({onDismissModal}) => {
  const {
    user: {
      profileInfo: {uid},
    },
  } = useContext(UserContext);
  const {
    values,
    handleSubmit,
    handleChange,
    submitCount,
    errors,
    resetForm,
  } = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: async () => {
      await addCategory({name: values.name, uid});
      resetForm();
      onDismissModal();
    },
    validationSchema: CreateCategorySchema,
  });
  return (
    <>
      <StyledModalContainer>
        <Customcard
          title="Adicionar Categoria"
          content={
            <>
              <TextInput
                placeholder="Nome da categoria"
                onChangeText={handleChange('name')}
                value={values.name}
                label="Nome da categoria"
                mode="outlined"
              />
              <Text> {submitCount > 0 && errors.name}</Text>
              <Button onPress={handleSubmit}>Adicionar</Button>
            </>
          }
        />
      </StyledModalContainer>
    </>
  );
};

export default AddCategory;
