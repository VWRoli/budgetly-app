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
import { useBudgetsContext } from '../../context/BudgetsContext';
import IconButton from '../common/IconButton';

interface Props {
  item: budgetItemType;
}
const BudgetItem: React.FC<Props> = ({ item }): JSX.Element => {
  const { defaultBudget } = useBudgetsContext();
  const [isEditableTitle, setIsEditableTitle] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  return (
    <CardWrapper>
      <View
        // onPress={() => setIsEditable(false)}
        style={{ flex: 1 }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity onPress={() => setIsEditableTitle(true)}>
            {isEditableTitle ? (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <InputSecondary
                  editable
                  placeholder="Budget item title"
                  value={item.title}
                  changeHandler={() => {}}
                  onBlur={() => setIsEditableTitle(false)}
                />
                <View style={{ width: 5 }} />
                <IconButton
                  icon="check"
                  pressHandler={() => {}}
                  type="primary"
                />
              </View>
            ) : (
              <Chip icon="laptop" value={item.title} />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'flex-end' }}
          >
            {isEditable ? (
              <InputSecondary
                editable
                placeholder={formatter(item.balance, defaultBudget?.currency)}
                value={'5'}
                changeHandler={() => {}}
              />
            ) : (
              <TouchableOpacity
                onPress={() => setIsEditable(true)}
                activeOpacity={0.7}
              >
                <CustomText
                  text={formatter(item.balance, defaultBudget?.currency)}
                  size={16}
                  styles={{ marginRight: 5 }}
                  primary
                  bold
                />
              </TouchableOpacity>
            )}

            <HeaderText
              text={`/${formatter(item.budgeted, defaultBudget?.currency)}`}
              size={20}
              styles={{ color: '#06B3C4' }}
            />
          </TouchableOpacity>
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
      </View>
    </CardWrapper>
  );
};

export default BudgetItem;
