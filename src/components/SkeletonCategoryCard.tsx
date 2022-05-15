import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
//Components
import CircularIcon from './common/CircularIcon';
import CustomText from './common/CustomText';
import Divider from './common/Divider';
import Skeleton from './common/Skeleton';

const CategoryCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.row}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ marginRight: 10 }}>
            <CircularIcon />
          </View>
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
