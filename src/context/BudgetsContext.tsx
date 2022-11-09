import React, { useContext, useEffect, useReducer, useState } from 'react';
import {
  getCategories,
  getDefaultBudget,
  getOwnedBudgets,
} from '../actions/budget';
import {
  actionType,
  budgetReducer,
  budgetStateType,
  INITIAL_STATE,
} from '../reducers/budgetReducer';
import { budgetType } from '../types/budgetType';

interface ValueTypes {
  state: budgetStateType;
  dispatch: React.Dispatch<actionType>;
  // ownedBudgets: budgetType[];
  // setOwnedBudgets: React.Dispatch<React.SetStateAction<budgetType[]>>;
  // defaultBudgetLoading: boolean;
  // defaultBudget: null | budgetType;
  // setDefaultBudget: React.Dispatch<React.SetStateAction<null | budgetType>>;
}

const defaultValue: ValueTypes = {
  state: INITIAL_STATE,
  dispatch: () => {},
  // ownedBudgets: [],
  // setOwnedBudgets: () => {},
  // defaultBudgetLoading: false,
  // defaultBudget: null,
  // setDefaultBudget: () => {},
};

const BudgetContext = React.createContext(defaultValue);

interface Props {
  children: React.ReactNode;
}

export const BudgetsProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, INITIAL_STATE);
  //const [ownedBudgets, setOwnedBudgets] = useState<budgetType[]>([]);
  // const [defaultBudgetLoading, setDefaultBudgetLoading] = useState(false);
  //const [defaultBudget, setDefaultBudget] = useState<null | budgetType>(null);

  useEffect(() => {
    getDefaultBudget(dispatch);
    getOwnedBudgets(dispatch);
  }, []);
  console.log(JSON.stringify(state, undefined, 2));
  //todo continue merging ownedbudgets, create apim actionsm reducers etc
  //todo causes problems
  // useEffect(() => {
  //   getCategories(dispatch, state.defaultBudget?._id);
  // }, [state.defaultBudget]);

  return (
    <BudgetContext.Provider
      value={{
        // ownedBudgets,
        // setOwnedBudgets,
        // defaultBudgetLoading,
        // defaultBudget,
        // setDefaultBudget,
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
