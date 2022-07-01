import React, { useContext } from 'react';
import { userFormType } from '../types/userFormType';

interface DefaultType {
  signIn: () => void;
  signOut: () => void;
  signUp: (values: userFormType) => void;
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
