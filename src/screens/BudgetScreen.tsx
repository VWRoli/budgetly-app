import React from 'react';
import { ScrollView, View } from 'react-native';
import { BASE_URL } from '../constants/constants';
import { useFetch } from '../hooks/useFetch';
import { categoryType } from '../types/categoryType';
//Components
import CategoryCard from '../components/CategoryCard';
import CustomText from '../components/common/CustomText';
import MainCard from '../components/MainCard';
import SkeletonCategoryCard from '../components/SkeletonCategoryCard';

const BudgetScreen: React.FC = (): JSX.Element => {
  const {
    data: categoryData,
    isLoading,
    isError,
  } = useFetch(`${BASE_URL}categories`);

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
      }}
      style={{
        flex: 1,
        backgroundColor: '#f8f7f7',
        paddingTop: 35,
      }}
    >
      <MainCard />

      <View style={{ paddingTop: 35, width: '85%' }}>
        <CustomText text="Categories" styles={{ marginVertical: 10 }} />
        {isLoading ? (
          <>
            <SkeletonCategoryCard />
            <SkeletonCategoryCard />
          </>
        ) : (
          categoryData.map((category: categoryType) => (
            <CategoryCard
              key={category.id}
              category={category}
              isLoading={isLoading}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default BudgetScreen;
