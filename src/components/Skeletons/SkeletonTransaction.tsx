import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Components
import Skeleton from './Skeleton';

const SkeletonTransaction = () => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    borderColor: '#eee',
    borderWidth: 2,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
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
