import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//Components
import CustomText from '../common/CustomText';
import HeaderText from '../common/HeaderText';
import IconButton from '../common/IconButton';
import Popup from '../common/Popup';

interface Props {
  title: string;
  handleAddPress: () => void;
  handleEditPress: () => void;
}

const CategoryHeader: React.FC<Props> = (props): JSX.Element => {
  const [isOpen, setisOpen] = useState(false);
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
      </View>
      <CustomText text="Available" size={12} />
      <Icon
        name="dots-vertical"
        color="#8B8C9E"
        size={20}
        onPress={() => setisOpen((prev) => !prev)}
      />
      {isOpen && <Popup onClose={() => setisOpen(false)} />}
    </View>
  );
};

export default CategoryHeader;
