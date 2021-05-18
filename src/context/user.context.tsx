import React, {useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {ColorSchemeName} from 'react-native';
import {FirestoreUser} from '../schemas/firestore/user/user.firestore';

//Interface com os dados do usuario que está logado no sistema
export interface User {
  ready: boolean;
  authInfo: FirebaseAuthTypes.User | null;
  profileInfo: FirestoreUser | null | undefined;
  colorScheme: ColorSchemeName;
}
//Logica para alterar e recuperar os dados do usuario em outras telas
type UserLogic = {
  user: User;
  setUser: (user: User) => void;
};
//Usuário padrão quando o app inicia
const defaultUser: User = {
  ready: false,
  colorScheme: 'light',
  authInfo: null,
  profileInfo: null,
};
//Contexto a ser usado pelos Hooks para recuperar os dados do usuario
export const UserContext = React.createContext<UserLogic>({
  user: defaultUser,
  setUser: () => null,
});
//Wrapper TSX que salva os dados do usuário em state e no Context.Provider para ser acessado em outras páginas (usado apenas em screens.tsx)
const UserContextProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User>(defaultUser);

  const userLogic = {user, setUser} as UserLogic;

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(authInfo => {
      console.log('Firebase callback');
      setUser(u => ({...u, authInfo, ready: true}));
      //TODO Pega profileInfo no fireStore, se houver
    });
    return subscriber; // unsubscribe on unmount
  }, []);
  return (
    <UserContext.Provider value={userLogic}>{children}</UserContext.Provider>
  );
};
export default UserContextProvider;
