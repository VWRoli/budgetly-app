import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
//Components
import AccountTab from '../components/Budget/AccountTab';
import Category from '../components/Budget/Category';
import Button from '../components/common/Button';
import CustomText from '../components/common/CustomText';
import Loading from '../components/common/Loading';
import MonthHeader from '../components/common/MonthHeader';
import { BASE_URL } from '../constants/constants';
import { useFetch } from '../hooks/useFetch';
import { categoryType } from '../types/categoryType';

const DashScreen: React.FC = (): JSX.Element => {
  const {
    data: categories,
    isLoading,
    isError,
  } = useFetch(`${BASE_URL}categories`);

  return (
    <View style={styles.container}>
      <MonthHeader />
      <View style={{ padding: 10 }}>
        <AccountTab />
      </View>
      <CustomText text="You don't have any categories or budget items yet." />
      <Button label="Add your first category" pressHandler={() => {}} />
      {isLoading ? (
        <Loading />
      ) : (
        categories.map((c: categoryType) => <Category category={c} />)
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryWrapper: { paddingTop: 35, width: '95%', justifyContent: 'center' },
});
export default DashScreen;
