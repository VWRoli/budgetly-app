import { TXN_FORM_ACTION_TYPES } from '../types/actions/txnFormActionType';
import { transactionType } from '../types/transactionType';

export const INITIAL_STATE: transactionType = {
  payee: '',
  outcome: '0',
  date: new Date().toISOString(),
  categoryTitle: '',
  budgetItemTitle: '',
  categoryId: '',
  budgetId: '',
  income: '0',
};

export interface actionType {
  type: TXN_FORM_ACTION_TYPES;
  payload?: any;
}

export const formReducer = (state = INITIAL_STATE, action: actionType) => {
  switch (action.type) {
    case TXN_FORM_ACTION_TYPES.CHANGE_PAYEE:
      return { ...state, payee: action.payload };

    case TXN_FORM_ACTION_TYPES.CHANGE_CATEGORY:
      return { ...state, categoryTitle: action.payload };
    case TXN_FORM_ACTION_TYPES.CHANGE_OUTCOME:
      return { ...state, outcome: action.payload };
    case TXN_FORM_ACTION_TYPES.CHANGE_INCOME:
      return { ...state, income: action.payload };
    case TXN_FORM_ACTION_TYPES.CHANGE_DATE:
      return { ...state, date: action.payload };

    default:
      return state;
  }
};
