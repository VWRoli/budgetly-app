import { BASE_URL } from '../constants/constants';
import { accountType } from '../types/accountType';
import { userFormType } from '../types/userFormType';
import { userType } from '../types/userType';

export async function signUp(userForm: userType) {
  try {
    const res = await fetch(`${BASE_URL}users/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userForm),
    });

    if (!res.ok) throw new Error(`${res.status} Something went wrong!`);

    const data = await res.json();
    if (data.token) {
      return data.token;
    } else {
      throw new Error(data);
    }
  } catch (error) {
    console.log(error); //todo error handling
  }
}

export const logIn = async (userForm: userFormType) => {
  try {
    const res = await fetch(`${BASE_URL}users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userForm),
    });

    if (!res.ok) throw new Error(`${res.status} Something went wrong!`);

    const data = await res.json();
    if (data.token) {
      return data.token;
    } else {
      throw new Error(data);
    }
  } catch (error) {
    console.log(error); //todo error handling
  }
};

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
