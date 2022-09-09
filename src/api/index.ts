import { BASE_URL } from '../constants/constants';
import { accountType } from '../types/accountType';
import { userFormType } from '../types/userFormType';
import { userType } from '../types/userType';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
const API = axios.create({ baseURL: BASE_URL });

export const signUp = (userForm: userType) => API.post('users/user', userForm);

export const logIn = (userForm: userFormType) =>
  API.post('users/login', userForm);

export const createAccount = async (account: accountType, token: string) => {
  try {
    const res = await fetch(`${BASE_URL}accounts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(account),
    });

    if (!res.ok) throw new Error(`${res.status} Something went wrong!`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error); //todo error handling
  }
};
