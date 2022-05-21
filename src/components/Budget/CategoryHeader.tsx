import React from 'react';
import { View } from 'react-native';
//Components
import CustomText from '../common/CustomText';

interface Props {
  title: string;
}

const CategoryHeader: React.FC<Props> = ({ title }): JSX.Element => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <CustomText text={title} primary bold size={14} />
      <CustomText text="Available" size={12} />
    </View>
  );
};

export default CategoryHeader;
