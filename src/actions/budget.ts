import { BUDGET_ACTION_TYPES } from '../types/budgetActionTypes';
import * as api from '../api';
import { actionType, budgetStateType } from '../reducers/budgetReducer';
import { categoryType } from '../types/categoryType';

export const getCategories = async (
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

export const createCategory = async (
  dispatch: React.Dispatch<actionType>,
  newCategory: categoryType,
) => {
  try {
    dispatch({ type: BUDGET_ACTION_TYPES.CREATE_START });
    await api.createCategory(newCategory);
    dispatch({
      type: BUDGET_ACTION_TYPES.CREATE_SUCCESS,
      payload: newCategory,
    });
  } catch (error) {
    dispatch({ type: BUDGET_ACTION_TYPES.CREATE_ERROR });
  }
};
