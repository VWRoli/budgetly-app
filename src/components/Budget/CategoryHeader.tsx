import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
//Components
import CustomText from '../common/CustomText';
import CircularIcon from '../common/CircularIcon';

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
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <CustomText text={title} primary bold size={14} />
        <CircularIcon>
          <Icon name="add" color="#fff" size={16} />
        </CircularIcon>
      </View>
      <CustomText text="Available" size={12} />
    </View>
  );
};

export default CategoryHeader;
