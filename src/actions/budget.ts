import { BUDGET_ACTION_TYPES } from '../types/budgetActionTypes';
import * as api from '../api';
import { actionType, budgetStateType } from '../reducers/budgetReducer';

export const getCategories = async (
  state: budgetStateType,
  dispatch: React.Dispatch<actionType>,
  id?: string,
) => {
  try {
    dispatch({ type: BUDGET_ACTION_TYPES.FETCH_START });
    const { data } = await api.getCategories(id);
    dispatch({ type: BUDGET_ACTION_TYPES.FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: BUDGET_ACTION_TYPES.FETCH_ERROR });
  }
};
