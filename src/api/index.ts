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
  let response;
  await axios
    .post(`${BASE_URL}users/user`, userForm)
    .then((res) => {
      response = res;
    })
    .catch((error) => {
      if (error.response.data) {
        showError(error.response.status, error.response.data.message);
      }
    });
  return response;
}
