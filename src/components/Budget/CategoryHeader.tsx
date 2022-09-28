import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
//Components
import CustomText from '../common/CustomText';
import CircularIcon from '../common/CircularIcon';
import HeaderText from '../common/HeaderText';

interface Props {
  title: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryHeader: React.FC<Props> = ({ title, setIsOpen }): JSX.Element => {
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
          alignItems: 'center',
        }}
      >
        <HeaderText text={title} size={24} />
        <CircularIcon pressHandler={() => setIsOpen((prev) => !prev)}>
          <Icon name="add" color="#fff" size={16} />
        </CircularIcon>
      </View>
      <CustomText text="Available" size={12} />
    </View>
  );
};

export default CategoryHeader;
