import React from 'react';
import { View, StyleSheet } from 'react-native';
//Components
import CircularIcon from './common/CircularIcon';
import CustomText from './common/CustomText';
import Divider from './common/Divider';
import HeaderText from './common/HeaderText';

const CategoryCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ marginRight: 10 }}>
            <CircularIcon />
          </View>
          <CustomText text="Bills" primary bold size={20} />
        </View>
        <CustomText text="7 Items" />
      </View>
      <Divider />
      <View style={styles.row}>
        <CustomText text="Budgeted" size={12} />
        <View style={{ width: 55 }}>
          <CustomText text="Available to budget" size={12} />
        </View>
      </View>
      <View style={styles.row}>
        <HeaderText text="HUF 3,149,706" size={28} />
        <CustomText text="HUF 0" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    borderColor: '#eee',
    borderWidth: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CategoryCard;
