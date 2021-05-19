import * as Yup from 'yup';

export const CreateCompraSchema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório!'),
  quantity: Yup.number()
    .required('Insira uma quantidade!')
    .moreThan(0, 'A quantidade deve ser maior que 0'),
  category: Yup.object().shape({
    id: Yup.string().required('Selecione uma categoria'),
    name: Yup.string().required('Selecione uma categoria'),
  }),
});
