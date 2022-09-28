import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { budgetItemType } from '../../types/budgetItemType';
import { formatter } from '../../utils/helpers';
import * as Progress from 'react-native-progress';
//Components
import CustomText from '../common/CustomText';
import Chip from '../common/Chip';
import CardWrapper from '../common/CardWrapper';
import HeaderText from '../common/HeaderText';
import InputSecondary from '../common/InputSecondary';

interface Props {
  item: budgetItemType;
}
const BudgetItem: React.FC<Props> = ({ item }): JSX.Element => {
  const [isEditable, setIsEditable] = useState(false);
  return (
    <CardWrapper>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => setIsEditable(false)}
        activeOpacity={0.7}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Chip icon="laptop" value={item.title} />
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            {isEditable ? (
              <InputSecondary
                placeholder={formatter(item.balance)}
                value={'5'}
                changeHandler={() => {}}
              />
            ) : (
              <TouchableOpacity
                onPress={() => setIsEditable(true)}
                activeOpacity={0.7}
              >
                <CustomText
                  text={formatter(item.balance)}
                  size={16}
                  styles={{ marginRight: 5, color: '#06B3C4' }}
                  bold
                />
              </TouchableOpacity>
            )}

            <HeaderText text={`/${formatter(item.budgeted)}`} size={20} />
          </View>
        </View>
        <View style={{ marginVertical: 7 }}>
          <Progress.Bar
            progress={0.3}
            width={null}
            height={8}
            borderRadius={8}
            color="#1D3777"
            unfilledColor="#ddd"
            borderWidth={0}
          />
        </View>
      </TouchableOpacity>
    </CardWrapper>
  );
};

export default BudgetItem;
