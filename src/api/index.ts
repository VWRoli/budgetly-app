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

export const getProfile = () => axios.get('users/me');

export const updateProfile = (userForm: userType) =>
  axios.patch('users/me', userForm);

export const createBudget = (budgetData: budgetType) =>
  axios.post('budgets', budgetData);

export const getBudgets = () => axios.get('budgets');
export const getBudget = (id: string) => axios.get(`budgets/${id}`);
export const createCategory = (category: categoryType) =>
  axios.post('categories', category);

export const getCategories = () => axios.get('categories');
export const getCategory = (id: string) => axios.get(`categories/${id}`);

export const editCategory = (id: string | undefined, category: categoryType) =>
  axios.patch(`/categories/${id}`, category);

export const deleteCategory = (id: string | undefined) =>
  axios.delete(`/categories/${id}`);
