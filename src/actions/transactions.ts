import * as api from '../api';
import { actionType } from '../reducers/budgetReducer';
import { ACTION_TYPES } from '../types/actionTypes';
import { transactionType } from '../types/transactionType';

export const getTransactions = async (
  dispatch: React.Dispatch<actionType>,
  id?: string,
) => {
  try {
    dispatch({ type: ACTION_TYPES.TXN_FETCH_START });
    const { data } = await api.getTransactions(id);
    dispatch({ type: ACTION_TYPES.TXN_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.TXN_FETCH_ERROR });
  }
};

export const createTransaction = async (
  dispatch: React.Dispatch<actionType>,
  transaction: transactionType,
) => {
  try {
    dispatch({ type: ACTION_TYPES.TXN_EDIT_START });
    const { data } = await api.createTransaction(transaction);
    dispatch({ type: ACTION_TYPES.TXN_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.TXN_EDIT_ERROR });
  }
};

export const deleteTransaction = async (
  dispatch: React.Dispatch<actionType>,
  id?: string,
) => {
  try {
    dispatch({ type: ACTION_TYPES.TXN_EDIT_START });
    await api.deleteTransaction(id);
    dispatch({ type: ACTION_TYPES.TXN_REMOVE_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.TXN_EDIT_ERROR });
  }
};

export const editTransaction = async (
  dispatch: React.Dispatch<actionType>,
  newTransaction: transactionType,
  id?: string,
) => {
  try {
    dispatch({ type: ACTION_TYPES.TXN_EDIT_START });
    const { data } = await api.editTransaction(id, newTransaction);

    dispatch({ type: ACTION_TYPES.TXN_EDIT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.TXN_EDIT_ERROR });
  }
};
