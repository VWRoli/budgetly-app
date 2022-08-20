import React, { useContext, useState } from 'react';

interface ValueTypes {
  ownedAccounts: any[];
  setOwnedAccounts: React.Dispatch<React.SetStateAction<any[]>>;
}

const defaultValue: ValueTypes = {
  ownedAccounts: [],
  setOwnedAccounts: () => {},
};

const AccountContext = React.createContext(defaultValue);

interface Props {
  children: React.ReactNode;
}

export const AccountsProvider: React.FC<Props> = ({ children }) => {
  const [ownedAccounts, setOwnedAccounts] = useState<any[]>([]);
  return (
    <AccountContext.Provider value={{ ownedAccounts, setOwnedAccounts }}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccountsContext = () => {
  return useContext(AccountContext);
};
