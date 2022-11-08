import { BASE_URL } from '../constants/constants';
import { budgetType } from '../types/budgetType';
import { userFormType } from '../types/userFormType';
import { userType } from '../types/userType';
import axios from '../lib/axios';
import { categoryType } from '../types/categoryType';
import { budgetItemType } from '../types/budgetItemType';
import { transactionType } from '../types/transactionType';

const API = axios.create({ baseURL: BASE_URL });

//?Auth
export const signUp = (userForm: userType) => API.post('users/user', userForm);

export const logIn = (userForm: userFormType) =>
  API.post('users/login', userForm);

//?Profile
export const getProfile = () => axios.get('users/me');

export const updateProfile = (userForm: userType) =>
  axios.patch('users/me', userForm);

//?Budget
export const createBudget = (budgetData: budgetType) =>
  axios.post('budgets', budgetData);

export const getBudgets = () => axios.get('budgets');

export const getBudget = (id: string) => axios.get(`budgets/${id}`);

export const fetchDefaultBudget = async (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setDefaultBudget: React.Dispatch<React.SetStateAction<budgetType | null>>,
) => {
  setIsLoading(true);
  try {
    const profile = await getProfile();
    const budget = await getBudget(profile.data.defaultBudget);

    setDefaultBudget(budget.data);

    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
    console.log(error);
  }
};

//?Category
export const createCategory = (category: categoryType) =>
  axios.post('categories', category);

export const getCategories = (budgetId: string | undefined) =>
  axios.get(`categories/${budgetId}`);

export const getCategory = (id: string) => axios.get(`categories/${id}`);

export const editCategory = (id: string | undefined, category: categoryType) =>
  axios.patch(`/categories/${id}`, category);

export const deleteCategory = (id: string | undefined) =>
  axios.delete(`/categories/${id}`);

//? Budget items
export const createBudgetItem = (budgetItem: budgetItemType) =>
  axios.post('budgetitems', budgetItem);

export const editBudgetItem = (
  id: string | undefined,
  budgetItem: budgetItemType,
) => axios.patch(`/budgetitems/${id}`, budgetItem);

//? Transactions

export const getTransactions = (budgetId: string | undefined) =>
  axios.get(`transactions/${budgetId}`);

export const createTransaction = (transaction: transactionType) =>
  axios.post('transactions', transaction);

export const editTransaction = (
  id: string | undefined,
  transaction: transactionType,
) => axios.patch(`/transactions/${id}`, transaction);

export const deleteTransaction = (id: string | undefined) =>
  axios.delete(`/transactions/${id}`);
