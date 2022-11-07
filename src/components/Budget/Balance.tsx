import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useBudgetsContext } from '../../context/BudgetsContext';
import { budgetItemType } from '../../types/budgetItemType';
import { formatter } from '../../utils/helpers';
//Components
import CustomText from '../common/CustomText';
import HeaderText from '../common/HeaderText';
import InputSecondary from '../common/InputSecondary';

interface Props {
  item: budgetItemType;
}
const Balance: React.FC<Props> = ({ item }) => {
  const { defaultBudget } = useBudgetsContext();
  const [isEditable, setIsEditable] = useState(false);

  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'flex-end' }}
      onPress={() => setIsEditable(true)}
    >
      <CustomText
        text={formatter(item.balance, defaultBudget?.currency)}
        size={16}
        styles={{ marginRight: 5 }}
        primary
        bold
      />

      {isEditable ? (
        <InputSecondary
          editable
          placeholder={formatter(item.balance, defaultBudget?.currency)}
          value={item.budgeted}
          changeHandler={() => {}}
        />
      ) : (
        <HeaderText
          text={`/${formatter(item.budgeted, defaultBudget?.currency)}`}
          size={20}
          styles={{ color: '#06B3C4' }}
        />
      )}
    </TouchableOpacity>
  );
};

export default Balance;
