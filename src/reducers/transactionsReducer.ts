import { TRANSACTIONS_ACTION_TYPES } from '../types/transactionActionTypes';

export interface transactionsStateType {
  loading: boolean;
  error: boolean;
  transactions: any[];
}

export const TRX_INIT_STATE: transactionsStateType = {
  loading: false,
  error: false,
  transactions: [],
};

export interface actionType {
  type: TRANSACTIONS_ACTION_TYPES;
  payload?: any;
}

export const transactionsReducer = (
  state = TRX_INIT_STATE,
  action: actionType,
) => {
  switch (action.type) {
    case TRANSACTIONS_ACTION_TYPES.FETCH_START:
      return {
        loading: true,
        error: false,
        transactions: [],
      };
    case TRANSACTIONS_ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case TRANSACTIONS_ACTION_TYPES.FETCH_ERROR:
      return {
        error: true,
        loading: false,
        transactions: [],
      };

    default:
      return state;
  }
};
