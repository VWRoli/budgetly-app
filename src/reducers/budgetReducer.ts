import { BUDGET_ACTION_TYPES } from '../types/budgetActionTypes';
import { categoryType } from '../types/categoryType';

export interface budgetStateType {
  loading: boolean;
  error: boolean;
  categories: categoryType[];
}
export const INITIAL_STATE: budgetStateType = {
  loading: false,
  categories: [],
  error: false,
};

export interface actionType {
  type: BUDGET_ACTION_TYPES;
  payload?: any;
}

export const budgetReducer = (state = INITIAL_STATE, action: actionType) => {
  switch (action.type) {
    case BUDGET_ACTION_TYPES.FETCH_START:
      return {
        loading: true,
        error: false,
        categories: [],
      };
    case BUDGET_ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case BUDGET_ACTION_TYPES.FETCH_ERROR:
      return {
        error: true,
        loading: false,
        categories: [],
      };
    case BUDGET_ACTION_TYPES.CREATE_START:
      return {
        ...state,
        loading: true,
      };
    case BUDGET_ACTION_TYPES.CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: [...state.categories, action.payload],
      };
    case BUDGET_ACTION_TYPES.CREATE_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
