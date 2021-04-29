/* eslint-disable no-shadow */
import {Card, Text, TextInput} from 'react-native-paper';
import {
  ForgotPasswordButton,
  LoginActions,
  LoginButton,
  LoginScreenPage,
} from './login.styles';
import LoadComponent, {LoadingState} from '../../components/loadComponent';
import React, {useContext} from 'react';

import {LoginValidationSchema} from '../../schemas/login.schema';
import {StackScreenProps as SSP} from '@react-navigation/stack';
import {StackScreenNames} from '..';
import {UserContext} from '../../context/user.context';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useFormik} from 'formik';

export interface LoginScreenProps {}
const {Title, Content} = Card;

const LoginScreen: React.FC<SSP<StackScreenNames, 'Login'>> = ({
  navigation: {reset},
}) => {
  const {
    user: {theme},
  } = useContext(UserContext);
  const {
    values: {email, password, submitting, submittingError},
    handleChange,
    handleSubmit,
    resetForm,
    errors,
    submitCount,
  } = useFormik({
    initialValues: {
      email: 'christianhess94@gmail.com',
      password: 'chr15091994',
      submitting: LoadingState.LOADED,
      submittingError: '',
    },
    onSubmit: async ({email, password}, {setFieldValue}) => {
      setFieldValue('submitting', LoadingState.LOADING);
      try {
        const {user} = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        const {uid, displayName} = user;
        await firestore()
          .collection('Users')
          .doc(uid)
          .set({uid, displayName, email: user.email, theme});
        reset({index: 0, routes: [{name: 'ChangeProfile'}]});
      } catch (createError) {
        try {
          await auth().signInWithEmailAndPassword(email, password);
          reset({index: 0, routes: [{name: 'Panel'}]});
        } catch (loginError) {
          setFieldValue('submittingError', createError.code);
          setFieldValue('submitting', LoadingState.ERROR);
          return;
        }
      }
    },
    validationSchema: LoginValidationSchema,
  });
  return (
    <LoginScreenPage>
      <LoadComponent
        loading={submitting}
        loadedComponent={
          <>
            <Title title="Faça login" />
            <Content>
              <TextInput
                placeholder="E-mail"
                label="E-mail"
                mode="outlined"
                value={email}
                onChangeText={handleChange('email')}
              />
              <Text>{submitCount > 0 && errors.email}</Text>
              <TextInput
                placeholder="Password"
                label="Password"
                textContentType="password"
                secureTextEntry={true}
                mode="outlined"
                value={password}
                onChangeText={handleChange('password')}
                right={<TextInput.Icon name={'eye-off'} />}
              />
              <Text> {submitCount > 0 && errors.password}</Text>
              <Text>
                {submitting === LoadingState.ERROR && submittingError}
              </Text>
            </Content>
            <LoginActions>
              <LoginButton onPress={handleSubmit}>Login</LoginButton>
              <ForgotPasswordButton onPress={resetForm}>
                Esqueci a senha
              </ForgotPasswordButton>
            </LoginActions>
          </>
        }
      />
    </LoginScreenPage>
  );
};

export default LoginScreen;
