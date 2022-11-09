import React, { useContext, useEffect, useReducer } from 'react';
import {
  getCategories,
  getDefaultBudget,
  getOwnedBudgets,
} from '../actions/budget';
import { getTransactions } from '../actions/transactions';
import {
  actionType,
  budgetReducer,
  budgetStateType,
  INITIAL_STATE,
} from '../reducers/budgetReducer';

interface ValueTypes {
  state: budgetStateType;
  dispatch: React.Dispatch<actionType>;
}

const defaultValue: ValueTypes = {
  state: INITIAL_STATE,
  dispatch: () => {},
};

const BudgetContext = React.createContext(defaultValue);

interface Props {
  children: React.ReactNode;
}

export const BudgetsProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, INITIAL_STATE);

  useEffect(() => {
    getDefaultBudget(dispatch);
    getOwnedBudgets(dispatch);
  }, []);

  useEffect(() => {
    getCategories(dispatch, state.defaultBudget?._id);
    getTransactions(dispatch, state.defaultBudget?._id);
  }, [state.defaultBudget]);

  return (
    <BudgetContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudgetsContext = () => {
  return useContext(BudgetContext);
};
