import { TRANSACTIONS_ACTION_TYPES } from '../types/actions/transactionActionTypes';

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
    case TRANSACTIONS_ACTION_TYPES.EDIT_START:
      return {
        ...state,
        loading: true,
      };
    case TRANSACTIONS_ACTION_TYPES.CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions: [...state.transactions, action.payload],
      };
    case TRANSACTIONS_ACTION_TYPES.REMOVE_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: state.transactions.filter((c) => c._id !== action.payload),
      };
    case TRANSACTIONS_ACTION_TYPES.EDIT_SUCCESS:
      //console.log(action.payload);
      return {
        ...state,
        loading: false,
        categories: state.transactions.map((t) =>
          t._id === action.payload._id ? action.payload : t,
        ),
      };
    case TRANSACTIONS_ACTION_TYPES.EDIT_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
};
