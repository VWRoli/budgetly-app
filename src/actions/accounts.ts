import { actionType } from '../reducers/budgetReducer';
import { accountType } from '../types/accountType';
import { ACTION_TYPES } from '../types/actionTypes';
import * as api from '../api';

export const createAccount = async (
  dispatch: React.Dispatch<actionType>,
  account: accountType,
) => {
  try {
    dispatch({ type: ACTION_TYPES.TXN_EDIT_START });
    const { data } = await api.createAccount(account);
    dispatch({ type: ACTION_TYPES.TXN_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.TXN_EDIT_ERROR });
  }
};
