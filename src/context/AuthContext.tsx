import React, { FC, useContext } from 'react';

interface DefaultType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue: DefaultType = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
};

const AuthContext = React.createContext(defaultValue);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
