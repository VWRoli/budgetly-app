import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { BASE_URL } from '../constants/constants';
import { useBudgetsContext } from '../context/BudgetsContext';
import { useFetch } from '../hooks/useFetch';
//Components
import AccountTab from '../components/Budget/AccountTab';
import MonthHeader from '../components/Budget/MonthHeader';

const DashScreen: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <MonthHeader />
      <View style={{ padding: 10 }}>
        <AccountTab />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainCardWrapper: {
    marginTop: 5,
    width: '100%',
    alignItems: 'center',
  },
  categoryWrapper: { paddingTop: 35, width: '95%', justifyContent: 'center' },
});
export default DashScreen;
