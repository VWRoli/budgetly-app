import React from 'react';
import { View, Dimensions } from 'react-native';
//Components
import CardWrapper from '../common/CardWrapper';
import Skeleton from './Skeleton';

const SkeletonBudgetItem: React.FC = (): JSX.Element => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <CardWrapper>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Skeleton height={30} width={100} />
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Skeleton height={25} />
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Skeleton width={windowWidth * 0.9} height={8} />
        </View>
      </View>
    </CardWrapper>
  );
};

export default SkeletonBudgetItem;
