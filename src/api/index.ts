import axios from 'axios';
import { userFormType } from '../types/userFormType';

const API = axios.create({
  baseURL: 'https://budgetly-mobile-app.herokuapp.com',
});

export async function signUp(userForm: userFormType) {
  try {
    const res = await API.post(`/users/user`, userForm);
    if (res.status !== 201) throw new Error('Something went wrong!');
    //console.log(res);
    return res.status;
  } catch (error) {
    let errorMessage = 'Failed to fetch!';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return errorMessage;
    //console.warn(error);
  }
}
