import 'react-native-gesture-handler';
import React, { useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { AuthContext } from './src/context/AuthContext';
//Navigation
import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';

//To ignore warning
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  const [userToken, setUserToken] = useState<string | null>(null);

  const authContext = useMemo(
    () => ({
      signIn: (token: string) => {
        setUserToken(token);
      },
      signOut: () => {
        setUserToken(null);
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
