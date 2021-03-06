import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { BASE_URL } from '../constants/constants';
import { useFetch } from '../hooks/useFetch';
//Components
import MainCard from '../components/MainCard';
import { categoryType } from '../types/categoryType';
import Category from '../components/Budget/Category';
import MonthHeader from '../components/Budget/MonthHeader';
import CurrenciesList from '../components/CurrenciesList';

const BudgetScreen: React.FC = (): JSX.Element => {
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
      }}
      style={styles.container}
    >
      <MonthHeader />
      <CurrenciesList />
      {/* <View style={styles.mainCardWrapper}>
        <MainCard />
      </View> */}
      {/* <View style={styles.categoryWrapper}>
        {isLoading ? (
          <></>
        ) : (
          categoriesData.map((c: categoryType) => (
            <Category category={c} key={c.id} />
          ))
        )}
      </View> */}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainCardWrapper: {
    marginTop: 5,
    width: '100%',
    alignItems: 'center',
  },
  categoryWrapper: { paddingTop: 35, width: '95%', justifyContent: 'center' },
});
export default BudgetScreen;
