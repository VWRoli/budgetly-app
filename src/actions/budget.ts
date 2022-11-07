import { ACTION_TYPES } from '../types/actionTypes';
import * as api from '../api';
import { actionType } from '../reducers/budgetReducer';
import { categoryType } from '../types/categoryType';
import { budgetItemType } from '../types/budgetItemType';

export const getCategories = async (
  dispatch: React.Dispatch<actionType>,
  id?: string,
) => {
  try {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    const { data } = await api.getCategories(id);
    dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.FETCH_ERROR });
  }
};

export const createCategory = async (
  dispatch: React.Dispatch<actionType>,
  newCategory: categoryType,
) => {
  try {
    dispatch({ type: ACTION_TYPES.EDIT_START });

    const { data } = await api.createCategory(newCategory);
    dispatch({
      type: ACTION_TYPES.CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.EDIT_ERROR });
  }
};

export const deleteCategory = async (
  dispatch: React.Dispatch<actionType>,
  id?: string,
) => {
  try {
    dispatch({ type: ACTION_TYPES.EDIT_START });
    await api.deleteCategory(id);
    dispatch({ type: ACTION_TYPES.REMOVE_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.EDIT_ERROR });
  }
};
export const editCategory = async (
  dispatch: React.Dispatch<actionType>,
  newCategory: categoryType,
  id?: string,
) => {
  try {
    dispatch({ type: ACTION_TYPES.EDIT_START });
    const { data } = await api.editCategory(id, newCategory);

    dispatch({ type: ACTION_TYPES.EDIT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.EDIT_ERROR });
  }
};

export const createBudgetItem = async (
  dispatch: React.Dispatch<actionType>,
  newBudgetItem: budgetItemType,
) => {
  console.log({ newBudgetItem });
  try {
    dispatch({ type: ACTION_TYPES.EDIT_START });
    const { data } = await api.createBudgetItem(newBudgetItem);
    console.log({ data });
    dispatch({ type: ACTION_TYPES.CREATE_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.EDIT_ERROR });
  }
};
