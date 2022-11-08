import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { budgetItemType } from '../../types/budgetItemType';
import * as Progress from 'react-native-progress';
import { useBudgetsContext } from '../../context/BudgetsContext';
import { editBudgetItem } from '../../actions/budget';
//Components
import Chip from '../common/Chip';
import CardWrapper from '../common/CardWrapper';
import InputSecondary from '../common/InputSecondary';
import IconButton from '../common/IconButton';
import Balance from './Balance';

interface Props {
  item: budgetItemType;
}
const BudgetItem: React.FC<Props> = ({ item }): JSX.Element => {
  const { dispatch } = useBudgetsContext();
  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState(item.title);

  const handleSave = () => {
    const newBudgetItem = { ...item, title };
    editBudgetItem(dispatch, newBudgetItem, item._id);
  };

  return (
    <CardWrapper>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity onPress={() => setIsEditable(true)}>
            {isEditable ? (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <InputSecondary
                  editable
                  placeholder="Budget item title"
                  value={title}
                  changeHandler={setTitle}
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
              <Chip icon="laptop" value={item.title} />
            )}
          </TouchableOpacity>
          <Balance item={item} />
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
