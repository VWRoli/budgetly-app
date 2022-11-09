import { ACTION_TYPES } from '../types/actionTypes';
import { budgetType } from '../types/budgetType';
import { categoryType } from '../types/categoryType';
import { transactionType } from '../types/transactionType';

export interface budgetStateType {
  loading: boolean;
  error: boolean;
  categories: categoryType[];
  transactions: transactionType[];
  defaultBudget: budgetType | null;
  ownedBudgets: budgetType[];
}
export const INITIAL_STATE: budgetStateType = {
  loading: false,
  categories: [],
  error: false,
  transactions: [],
  defaultBudget: null,
  ownedBudgets: [],
};

export interface actionType {
  type: ACTION_TYPES;
  payload?: any;
}

export const budgetReducer = (state = INITIAL_STATE, action: actionType) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        ...state,
        loading: true,
        error: false,
        categories: [],
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        categories: [],
      };
    case ACTION_TYPES.CREATE_BUDGET_SUCCESS:
      return {
        ...state,
        loading: false,
        defaultBudget: action.payload,
        ownedBudgets: [...state.ownedBudgets, action.payload],
      };
    case ACTION_TYPES.EDIT_START:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: [...state.categories, action.payload],
      };
    case ACTION_TYPES.EDIT_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case ACTION_TYPES.REMOVE_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: state.categories.filter((c) => c._id !== action.payload),
      };
    case ACTION_TYPES.EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: state.categories.map((c) =>
          c._id === action.payload._id ? action.payload : c,
        ),
        transactions: state.transactions.map((t) =>
          t.categoryId === action.payload._id
            ? { ...t, categoryTitle: action.payload.title }
            : t,
        ),
      };
    case ACTION_TYPES.CREATE_ITEM_SUCCESS:
      //handles createing budget items end ediding them
      const updatedCategory = state.categories.filter(
        (c) => c._id === action.payload.categoryId,
      )[0];

      const newCategory = {
        ...updatedCategory,
        //filtering budget items to check if already exists, if it does remove it for edit to work
        budgetItems: [
          ...(updatedCategory.budgetItems?.filter(
            (b) => b._id !== action.payload._id,
          ) || []),
          action.payload,
        ],
      };
      return {
        ...state,
        loading: false,
        categories: [
          ...state.categories.filter(
            (c) => c._id !== action.payload.categoryId,
          ),
          newCategory,
        ],
      };

    case ACTION_TYPES.TXN_FETCH_START:
      return {
        ...state,
        loading: true,
        error: false,
        transactions: [],
      };
    case ACTION_TYPES.TXN_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case ACTION_TYPES.TXN_FETCH_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        transactions: [],
      };
    case ACTION_TYPES.TXN_EDIT_START:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.TXN_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions: [...state.transactions, action.payload],
      };
    case ACTION_TYPES.FETCH_BUDGET_SUCCESS:
      return { ...state, loading: false, defaultBudget: action.payload };
    case ACTION_TYPES.FETCH_OWNED_BUDGET_SUCCESS:
      return { ...state, loading: false, ownedBudgets: action.payload };
    case ACTION_TYPES.TXN_REMOVE_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions: state.transactions.filter(
          (c) => c._id !== action.payload,
        ),
      };
    case ACTION_TYPES.TXN_EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions: state.transactions.map((t) =>
          t._id === action.payload._id ? action.payload : t,
        ),
      };
    case ACTION_TYPES.TXN_EDIT_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
