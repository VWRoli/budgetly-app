import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { BASE_URL } from '../constants/constants';
import { useFetch } from '../hooks/useFetch';
//Components
import MainCard from '../components/MainCard';
import { categoryType } from '../types/categoryType';
import Category from '../components/Budget/Category';

const BudgetScreen: React.FC = (): JSX.Element => {
  const {
    data: categoriesData,
    isLoading,
    isError,
  } = useFetch(`${BASE_URL}users/1/categories`);

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
      }}
      style={styles.container}
    >
      <View style={styles.mainCardWrapper}>
        <MainCard />
      </View>
      <View style={styles.categoryWrapper}>
        {isLoading ? (
          <></>
        ) : (
          categoriesData.map((c: categoryType) => (
            <Category category={c} key={c.id} />
          ))
        )}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f7f7',
  },
  mainCardWrapper: {
    marginTop: 35,
    width: '100%',
    alignItems: 'center',
  },
  categoryWrapper: { paddingTop: 35, width: '95%', justifyContent: 'center' },
});
export default BudgetScreen;
