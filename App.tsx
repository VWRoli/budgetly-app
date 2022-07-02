import 'react-native-gesture-handler';
import React, { useEffect, useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { AuthContext } from './src/context/AuthContext';

//Navigation
import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';
import { getData, removeData, storeData } from './src/utils/helpers';

//To ignore warning
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  const [userToken, setUserToken] = useState<string | null>(null);

  const getLocalData = async () => {
    const localData = await getData('token');
    if (localData) setUserToken(localData);
  };
  useEffect(() => {
    getLocalData();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (token: string) => {
        setUserToken(token);
        await storeData('token', token);
      },
      signOut: () => {
        setUserToken(null);
        removeData('token');
      },
      signUp: (token: string) => {
        setUserToken(token);
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken !== null ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
