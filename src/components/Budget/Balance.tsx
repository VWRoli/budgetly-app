import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { editBudgetItem } from '../../actions/budget';
import { useBudgetsContext } from '../../context/BudgetsContext';
import { budgetItemType } from '../../types/budgetItemType';
import { formatter } from '../../utils/helpers';
//Components
import CustomText from '../common/CustomText';
import HeaderText from '../common/HeaderText';
import IconButton from '../common/IconButton';
import InputSecondary from '../common/InputSecondary';

interface Props {
  item: budgetItemType;
}
const Balance: React.FC<Props> = ({ item }) => {
  const { state, dispatch } = useBudgetsContext();
  const [isEditable, setIsEditable] = useState(false);
  const [balance, setBalance] = useState(item.balance);

  const handleSave = () => {
    const newBudgetItem = { ...item, balance };
    editBudgetItem(dispatch, newBudgetItem, item._id);
  };

  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'flex-end' }}
      onPress={() => setIsEditable(true)}
    >
      <CustomText
        text={formatter(item.spent, state.defaultBudget?.currency)}
        size={16}
        styles={{ marginRight: 5 }}
        primary
        bold
      />

      {isEditable ? (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <InputSecondary
            editable
            placeholder={formatter(balance, state.defaultBudget?.currency)}
            value={balance}
            changeHandler={setBalance}
          />
          <View style={{ width: 5 }} />
          <IconButton
            icon="check"
            pressHandler={() => {
              handleSave();
              setIsEditable(false);
            }}
            type="primary"
          />
        </View>
      ) : (
        <HeaderText
          text={`/${formatter(balance, state.defaultBudget?.currency)}`}
          size={20}
          styles={{ color: '#06B3C4' }}
        />
      )}
    </TouchableOpacity>
  );
};

export default Balance;
