import 'react-native-gesture-handler';
import React, { useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import Toast from 'react-native-toast-message';
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
      signIn: () => {
        setUserToken('egfr');
      },
      signOut: () => {
        setUserToken(null);
      },
      signUp: () => {
        setUserToken('grgffr');
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
