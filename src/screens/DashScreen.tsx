import React from 'react';
import { StyleSheet, View } from 'react-native';
//Components
import AccountTab from '../components/Budget/AccountTab';
import MonthHeader from '../components/common/MonthHeader';

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
