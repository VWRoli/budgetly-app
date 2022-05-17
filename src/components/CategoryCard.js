import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { formatter } from '../utils/helpers';
//Components
import CircularIcon from './common/CircularIcon';
import CustomText from './common/CustomText';
import Divider from './common/Divider';
import HeaderText from './common/HeaderText';
import Skeleton from './Skeletons/Skeleton';

const CategoryCard = ({ category, isLoading }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      //todo typescript error
      onPress={() => navigation.navigate('BudgetDetail', { id: category.id })}
    >
      <View style={styles.row}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ marginRight: 10 }}>
            <CircularIcon />
          </View>
          {isLoading ? (
            <Skeleton />
          ) : (
            <CustomText text={category.title} primary bold size={20} />
          )}
        </View>
        {isLoading ? (
          <Skeleton width={50} />
        ) : (
          <CustomText text={`${category.items} items`} />
        )}
      </View>
      <Divider />
      <View style={styles.row}>
        <CustomText text="Budgeted" size={12} />
        <View style={{ width: 55 }}>
          <CustomText text="Available to budget" size={12} />
        </View>
      </View>
      <View style={styles.row}>
        {isLoading ? (
          <Skeleton />
        ) : (
          <HeaderText text={formatter(category.budgeted)} size={28} />
        )}
        {isLoading ? (
          <Skeleton width={50} />
        ) : (
          <CustomText text={formatter(category.available)} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    borderColor: '#eee',
    borderWidth: 2,
    marginVertical: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CategoryCard;
