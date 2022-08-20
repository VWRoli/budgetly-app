import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BASE_URL } from '../constants/constants';
import { useFetch } from '../hooks/useFetch';
//Components
import MainCard from '../components/MainCard';
import { categoryType } from '../types/categoryType';
import Category from '../components/Budget/Category';
import MonthHeader from '../components/Budget/MonthHeader';
import CreateAccountScreen from './CreateAccountScreen';

const Stack = createNativeStackNavigator();

const DashScreen: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <MonthHeader />
      <Text>Dash?</Text>
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
