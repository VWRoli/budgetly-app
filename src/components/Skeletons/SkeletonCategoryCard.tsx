import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
//Components
import CircularIcon from '../common/CircularIcon';
import CustomText from '../common/CustomText';
import Divider from '../common/Divider';
import Skeleton from './Skeleton';
import CardWrapper from '../common/CardWrapper';

const CategoryCard = () => {
  return (
    <CardWrapper>
      <TouchableOpacity style={{ width: '100%' }}>
        <View style={styles.row}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginRight: 10 }}>{/* <CircularIcon /> */}</View>
            <Skeleton />
          </View>
          <Skeleton width={50} />
        </View>
        <Divider />
        <View style={styles.row}>
          <CustomText text="Budgeted" size={12} />
          <View style={{ width: 55 }}>
            <CustomText text="Available to budget" size={12} />
          </View>
        </View>
        <View style={styles.row}>
          <Skeleton />
          <Skeleton width={50} />
        </View>
      </TouchableOpacity>
    </CardWrapper>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CategoryCard;
