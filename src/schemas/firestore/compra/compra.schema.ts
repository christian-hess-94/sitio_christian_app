import * as Yup from 'yup';

export const CreateCompraSchema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório!'),
  quantity: Yup.number()
    .required('Insira a quantidade atual!')
    .moreThan(-1, 'A quantidade atual deve ser no mínimo 0'),
  quantityGoal: Yup.number()
    .required('Insira uma quantidade máxima!')
    .moreThan(0, 'A quantidade máxima deve ser maior que 0'),
  category: Yup.object().shape({
    id: Yup.string().required('Selecione uma categoria'),
    name: Yup.string().required('Selecione uma categoria'),
  }),
});
