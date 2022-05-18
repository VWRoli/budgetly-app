import React from 'react';
import { View, StyleSheet } from 'react-native';
//Components
import CardWrapper from '../common/CardWrapper';
import Skeleton from './Skeleton';

const SkeletonTransaction = () => {
  return (
    <CardWrapper>
      <View style={styles.iconWrapper}></View>
      <View style={styles.content}>
        <View>
          <View style={{ marginBottom: 8 }}>
            <Skeleton width={70} />
          </View>
          <Skeleton />
        </View>
        <Skeleton width={70} />
      </View>
    </CardWrapper>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    backgroundColor: '#06B3C4',
    borderRadius: 15,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default SkeletonTransaction;
