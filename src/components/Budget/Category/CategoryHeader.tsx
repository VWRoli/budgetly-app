import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { categoryType } from '../../../types/categoryType';
import { HandlerTypes } from '../../../types/dashHandlerTypes';
//Components
import CustomText from '../../common/CustomText';
import HeaderText from '../../common/HeaderText';
import IconButton from '../../common/IconButton';
import Popup from './Popup';

export interface CategoryHeaderProps {
  category: categoryType;
  handlers: HandlerTypes;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = (props): JSX.Element => {
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
        <HeaderText
          text={props.category.title}
          size={24}
          styles={{ marginRight: 5 }}
        />
        <IconButton
          icon="plus"
          pressHandler={() => props.handlers.handleAddPress(props.category._id)}
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
      {isOpen && (
        <Popup
          category={props.category}
          onClose={() => setisOpen(false)}
          handlers={props.handlers}
        />
      )}
    </View>
  );
};

export default CategoryHeader;
