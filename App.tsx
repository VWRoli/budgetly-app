import 'react-native-gesture-handler';
import React, { useEffect, useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { AuthContext } from './src/context/AuthContext';
import { localStorageUtils } from './src/utils/helpers';
import { BudgetsProvider } from './src/context/BudgetsContext';
//Navigation
import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';

//To ignore warning
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  const [userToken, setUserToken] = useState<string | null>(null);

  const getLocalData = async () => {
    const localData = await localStorageUtils.getData('token');
    if (localData) setUserToken(localData);
  };
  useEffect(() => {
    getLocalData();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: (token: string) => {
        setUserToken(token);
        localStorageUtils.storeData('token', token);
      },
      signOut: () => {
        setUserToken(null);
        localStorageUtils.removeData('token');
      },
      signUp: (token: string) => {
        setUserToken(token);
        localStorageUtils.storeData('token', token);
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <BudgetsProvider>
        <NavigationContainer>
          {userToken !== null ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
      </BudgetsProvider>
    </AuthContext.Provider>
  );
};

export default App;
