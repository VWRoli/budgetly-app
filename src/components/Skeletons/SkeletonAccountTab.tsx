import React from 'react';
import { View } from 'react-native';
import Skeleton from './Skeleton';

const SkeletonAccountTab = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Skeleton height={40} width={70} />
        <View>
          <Skeleton height={15} width={50} />
          <Skeleton height={10} width={40} />
        </View>
      </View>
      <Skeleton height={25} />
    </View>
  );
};

export default SkeletonAccountTab;
