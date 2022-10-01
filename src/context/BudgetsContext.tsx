import React, { useContext, useEffect, useState } from 'react';
import { fetchDefaultBudget } from '../api';
import { budgetType } from '../types/budgetType';

interface ValueTypes {
  ownedBudgets: budgetType[];
  setOwnedBudgets: React.Dispatch<React.SetStateAction<budgetType[]>>;
  defaultBudgetLoading: boolean;
  defaultBudget: null | budgetType;
  setDefaultBudget: React.Dispatch<React.SetStateAction<null | budgetType>>;
}

const defaultValue: ValueTypes = {
  ownedBudgets: [],
  setOwnedBudgets: () => {},
  defaultBudgetLoading: false,
  defaultBudget: null,
  setDefaultBudget: () => {},
};

const BudgetContext = React.createContext(defaultValue);

interface Props {
  children: React.ReactNode;
}

export const BudgetsProvider: React.FC<Props> = ({ children }) => {
  const [ownedBudgets, setOwnedBudgets] = useState<budgetType[]>([]);
  const [defaultBudgetLoading, setDefaultBudgetLoading] = useState(false);
  const [defaultBudget, setDefaultBudget] = useState<null | budgetType>(null);

  useEffect(() => {
    fetchDefaultBudget(setDefaultBudgetLoading, setDefaultBudget);
  }, []);

  return (
    <BudgetContext.Provider
      value={{
        ownedBudgets,
        setOwnedBudgets,
        defaultBudgetLoading,
        defaultBudget,
        setDefaultBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudgetsContext = () => {
  return useContext(BudgetContext);
};
