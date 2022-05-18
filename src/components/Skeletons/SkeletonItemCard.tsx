import React from 'react';
import { StyleSheet, View } from 'react-native';
//Components
import CardWrapper from '../common/CardWrapper';
import Skeleton from './Skeleton';

const SkeletonItemCard = () => {
  return (
    <CardWrapper>
      <View>
        <View style={styles.title}>
          <Skeleton height={20} width={20} />
          <Skeleton width={90} />
        </View>
        <Skeleton width={90} />
      </View>
      <Skeleton width={60} height={60} radius={60} />
    </CardWrapper>
  );
};

const styles = StyleSheet.create({
  title: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
});

export default SkeletonItemCard;
