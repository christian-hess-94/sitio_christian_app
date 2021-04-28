import * as Yup from 'yup';

export const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido!')
    .required('O e-mail é obrigatório!'),
  password: Yup.string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres!')
    .required('A senha é obrigatória!'),
});
