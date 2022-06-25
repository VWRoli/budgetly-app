import React, { useContext } from 'react';

interface DefaultType {
  signIn: () => void;
  signOut: () => void;
  signUp: () => void;
}

const defaultValue: DefaultType = {
  signIn: () => {},
  signOut: () => {},
  signUp: () => {},
};

export const AuthContext = React.createContext(defaultValue);

export const useAuthContext = () => {
  return useContext(AuthContext);
};
