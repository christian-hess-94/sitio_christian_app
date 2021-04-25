import React, {useState} from 'react';
import {ThemeNames} from '../theme';
//Interface com os dados do usuario que está logado no sistema
export interface User {
  ready: boolean;
  theme: ThemeNames;
}
//Logica para alterar e recuperar os dados do usuario em outras telas
type UserLogic = {
  user: User;
  setUser: (user: User) => void;
};
//Usuário padrão quando o app inicia
const defaultUser: User = {
  ready: true,
  theme: 'no-preference',
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
  return (
    <UserContext.Provider value={userLogic}>{children}</UserContext.Provider>
  );
};
export default UserContextProvider;
