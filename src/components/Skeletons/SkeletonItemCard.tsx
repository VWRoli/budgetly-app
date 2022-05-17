import React from 'react';
import { StyleSheet, View } from 'react-native';
//Components
import Skeleton from './Skeleton';

const SkeletonItemCard = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.title}>
          <Skeleton height={20} width={20} />
          <Skeleton width={90} />
        </View>
        <Skeleton width={90} />
      </View>
      <Skeleton width={60} height={60} radius={60} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderWidth: 2,
    marginVertical: 8,
    borderRadius: 15,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
});

export default SkeletonItemCard;
