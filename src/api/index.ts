import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import { userFormType } from '../types/userFormType';
import Toast from 'react-native-toast-message';

const showError = (status: number, msg: string) => {
  Toast.show({
    type: 'error',
    text1: `${status} Error!`,
    text2: msg,
  });
};

export async function signUp(userForm: userFormType) {
  try {
    const res = await fetch(`${BASE_URL}users/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userForm),
    });

    const data = await res.json();
    console.log(JSON.stringify(data, undefined, 2));
    console.log(data.token);
    if (data.token) {
      return data.token;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.log(error);
  }
}
