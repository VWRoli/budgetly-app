import React from 'react';
import { View } from 'react-native';
//Components
import CategoryCard from '../components/CategoryCard';
import CustomText from '../components/common/CustomText';
import MainCard from '../components/MainCard';
import { BASE_URL } from '../constants/constants';
import { useFetch } from '../hooks/useFetch';

const BudgetScreen: React.FC = (): JSX.Element => {
  const {
    data: accountData,
    isLoading,
    isError,
  } = useFetch(`${BASE_URL}users/1`);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f8f7f7',
        paddingTop: 35,
      }}
    >
      <MainCard data={accountData} isLoading={true} />

      <View style={{ paddingTop: 35, width: '85%' }}>
        <CustomText text="Categories" styles={{ marginVertical: 10 }} />
        <CategoryCard />
      </View>
    </View>
  );
};

export default BudgetScreen;
