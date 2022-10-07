import { BUDGET_ACTION_TYPES } from '../types/budgetActionTypes';
import { categoryType } from '../types/categoryType';

interface budgetStateType {
  loading: boolean;
  error: boolean;
  categories: categoryType[];
}
export const INITIAL_STATE: budgetStateType = {
  loading: false,
  categories: [],
  error: false,
};

interface actionType {
  type: string;
  payload: any;
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
    default:
      return state;
  }
};
