import React, {useState} from 'react';
export interface User {
  ready: boolean;
}
type UserLogic = {
  user: User;
  setUser: (user: User) => void;
};

const defaultUser: User = {
  ready: false,
};

const UserContextProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User>(defaultUser);
  const UserContext = React.createContext<UserLogic>({
    user: defaultUser,
    setUser: () => null,
  });

  const userLogic = {user, setUser} as UserLogic;
  return (
    <UserContext.Provider value={userLogic}>{children}</UserContext.Provider>
  );
};
export default UserContextProvider;
