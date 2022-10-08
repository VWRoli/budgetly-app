import * as api from '../api';
import { actionType } from '../reducers/transactionsReducer';
import { TRANSACTIONS_ACTION_TYPES } from '../types/transactionActionTypes';

export const getTransactions = async (
  dispatch: React.Dispatch<actionType>,
  id?: string,
) => {
  try {
    dispatch({ type: TRANSACTIONS_ACTION_TYPES.FETCH_START });
    const { data } = await api.getTransactions(id);
    // console.log({ data });
    dispatch({ type: TRANSACTIONS_ACTION_TYPES.FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TRANSACTIONS_ACTION_TYPES.FETCH_ERROR });
  }
};
