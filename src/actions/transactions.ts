import * as api from '../api';
import { actionType } from '../reducers/transactionsReducer';
import { TRANSACTIONS_ACTION_TYPES } from '../types/actions/transactionActionTypes';
import { transactionType } from '../types/transactionType';

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

export const createTransaction = async (
  dispatch: React.Dispatch<actionType>,
  transaction: transactionType,
) => {
  try {
    dispatch({ type: TRANSACTIONS_ACTION_TYPES.EDIT_START });
    const { data } = await api.createTransaction(transaction);
    dispatch({ type: TRANSACTIONS_ACTION_TYPES.CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TRANSACTIONS_ACTION_TYPES.EDIT_ERROR });
  }
};

export const deleteTransaction = async (
  dispatch: React.Dispatch<actionType>,
  id?: string,
) => {
  try {
    dispatch({ type: TRANSACTIONS_ACTION_TYPES.EDIT_START });
    await api.deleteTransaction(id);
    dispatch({ type: TRANSACTIONS_ACTION_TYPES.REMOVE_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: TRANSACTIONS_ACTION_TYPES.EDIT_ERROR });
  }
};

export const editTransaction = async (
  dispatch: React.Dispatch<actionType>,
  newTransaction: transactionType,
  id?: string,
) => {
  try {
    dispatch({ type: TRANSACTIONS_ACTION_TYPES.EDIT_START });
    const { data } = await api.editTransaction(id, newTransaction);

    dispatch({ type: TRANSACTIONS_ACTION_TYPES.EDIT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TRANSACTIONS_ACTION_TYPES.EDIT_ERROR });
  }
};
