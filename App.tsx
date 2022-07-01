import 'react-native-gesture-handler';
import React, { useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import Toast from 'react-native-toast-message';
import { AuthContext } from './src/context/AuthContext';
import * as api from './src/api';
import { userFormType } from './src/types/userFormType';
//Navigation
import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';
import { BASE_URL } from './src/constants/constants';

//To ignore warning
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  const [userToken, setUserToken] = useState<string | null>(null);

  const authContext = useMemo(
    () => ({
      signIn: () => {
        setUserToken('egfr');
      },
      signOut: () => {
        setUserToken(null);
      },
      signUp: async (values: userFormType) => {
        try {
          const res = await fetch(`${BASE_URL}users/user`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });

          const data = await res.json();
          setUserToken(data.token);
        } catch (error) {
          console.log(error);
        }
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken !== null ? <AppStack /> : <AuthStack />}
        <Toast />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
