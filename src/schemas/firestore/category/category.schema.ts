import * as Yup from 'yup';

export const CreateCategorySchema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório!'),
});
