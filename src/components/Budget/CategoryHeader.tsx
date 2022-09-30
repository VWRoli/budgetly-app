import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//Components
import CustomText from '../common/CustomText';
import CircularIcon from '../common/CircularIcon';
import HeaderText from '../common/HeaderText';
import IconButton from '../common/IconButton';

interface Props {
  title: string;
  handleAddPress: () => void;
  handleEditPress: () => void;
}

const CategoryHeader: React.FC<Props> = (props): JSX.Element => {
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
        <HeaderText text={props.title} size={24} />
        <IconButton
          icon="plus"
          pressHandler={props.handleAddPress}
          type="primary"
        />
        {/* <CircularIcon pressHandler={props.handleAddPress}>
          <Icon name="plus" color="#fff" size={16} />
        </CircularIcon> */}
      </View>
      <CustomText text="Available" size={12} />
      <Icon
        name="dots-vertical"
        color="#8B8C9E"
        size={20}
        onPress={props.handleEditPress}
      />
    </View>
  );
};

export default CategoryHeader;
