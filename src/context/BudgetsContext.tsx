import React, { useContext, useState } from 'react';
import { budgetType } from '../types/budgetType';

interface ValueTypes {
  ownedBudgets: any[];
  setOwnedBudgets: React.Dispatch<React.SetStateAction<budgetType[]>>;
}

const defaultValue: ValueTypes = {
  ownedBudgets: [],
  setOwnedBudgets: () => {},
};

const BudgetContext = React.createContext(defaultValue);

interface Props {
  children: React.ReactNode;
}

export const BudgetsProvider: React.FC<Props> = ({ children }) => {
  const [ownedBudgets, setOwnedBudgets] = useState<budgetType[]>([]);
  return (
    <BudgetContext.Provider value={{ ownedBudgets, setOwnedBudgets }}>
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudgetsContext = () => {
  return useContext(BudgetContext);
};
