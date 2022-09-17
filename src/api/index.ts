import { BASE_URL } from '../constants/constants';
import { budgetType } from '../types/budgetType';
import { userFormType } from '../types/userFormType';
import { userType } from '../types/userType';
import axios from '../lib/axios';
import { categoryType } from '../types/categoryType';

const API = axios.create({ baseURL: BASE_URL });

export const signUp = (userForm: userType) => API.post('users/user', userForm);

export const logIn = (userForm: userFormType) =>
  API.post('users/login', userForm);

export const createBudget = (budgetData: budgetType) =>
  axios.post('budgets', budgetData);

export const getBudgets = () => axios.get('budgets');

export const createCategory = (category: categoryType) =>
  axios.post('categories', category);

export const getCategories = () => axios.get('categories');
