import React, { useCallback, useReducer, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useBudgetsContext } from '../../context/BudgetsContext';
//Components
import Button from '../common/Button';
import InputSecondary from '../common/InputSecondary';
import {
  actionType,
  transactionsStateType,
} from '../../reducers/transactionsReducer';
import { createTransaction } from '../../actions/transactions';

interface Props {
  state: transactionsStateType;
  dispatch: React.Dispatch<actionType>;
  onClose: () => void;
}

const AddTransaction: React.FC<Props> = ({ dispatch, state, onClose }) => {
  const { defaultBudget, state: budgetState } = useBudgetsContext();
  //Openers
  const [openCategory, setOpenCategory] = useState(false);
  const [openItem, setOpenItem] = useState(false);
  const [openDatePicker, setOpenDatePicker] = useState(false);

  //States
  const [payee, setPayee] = useState('');
  const [categoryTitle, setCategoryTitle] = useState('');
  const [budgetItemTitle, setBudgetItemTitle] = useState('');
  const [inflow, setInflow] = useState('');
  const [outflow, setOutflow] = useState('');
  const [date, setDate] = useState(new Date());

  const onCategoryOpen = useCallback(() => {
    setOpenItem(false);
  }, []);

  const onItemOpen = useCallback(() => {
    setOpenCategory(false);
  }, []);

  const handleCreate = () => {
    const newTransaction = {
      payee,
      date: date.toISOString(),
      categoryTitle,
      inflow,
      outflow,
      budgetId: defaultBudget?._id || '',
      categoryId:
        budgetState.categories.filter((c) => c.title === categoryTitle)[0]
          ._id || '',
      budgetItemTitle,
    };

    createTransaction(dispatch, newTransaction);
    onClose();
  };

  return (
    <View style={{ width: '95%' }}>
      <InputSecondary
        editable
        placeholder="Payee..."
        changeHandler={setPayee}
        value={payee}
      />

      <DropDownPicker
        open={openCategory}
        value={categoryTitle}
        items={budgetState.categories.map((c) => ({
          label: c.title,
          value: c.title,
        }))}
        zIndex={3000}
        zIndexInverse={1000}
        onOpen={onCategoryOpen}
        setOpen={setOpenCategory}
        setValue={setCategoryTitle}
        style={styles.pickerStyle}
        placeholderStyle={styles.placeholderStyle}
        dropDownContainerStyle={styles.dropDownContainerStyle}
        placeholder="Select a budget category"
      />

      <DropDownPicker
        open={openItem}
        value={budgetItemTitle}
        items={
          categoryTitle
            ? budgetState.categories
                .filter((c) => c.title === categoryTitle)[0]
                .budgetItems?.map((c) => ({
                  label: c.title,
                  value: c.title,
                })) || []
            : []
        }
        zIndex={2000}
        zIndexInverse={2000}
        onOpen={onItemOpen}
        setOpen={setOpenItem}
        setValue={setBudgetItemTitle}
        style={{ ...styles.pickerStyle, opacity: !categoryTitle ? 0.5 : 1 }}
        placeholderStyle={styles.placeholderStyle}
        dropDownContainerStyle={styles.dropDownContainerStyle}
        disabled={!categoryTitle}
        disabledItemContainerStyle={{
          opacity: 0.5,
        }}
        placeholder="Select a budget item"
      />

      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View style={{ flex: 1, marginRight: 2.5 }}>
          <InputSecondary
            placeholder="inflow"
            changeHandler={setInflow}
            keyboardType="numeric"
            editable={!outflow}
            value={inflow}
          />
        </View>
        <View style={{ flex: 1, marginLeft: 2.5 }}>
          <InputSecondary
            placeholder="Outflow"
            styles={{ flex: 1 }}
            keyboardType="numeric"
            editable={!inflow}
            changeHandler={setOutflow}
            value={outflow}
          />
        </View>
      </View>
      <View style={{ marginVertical: 5 }}>
        <Button
          label={date.toISOString().substring(0, 10)}
          slim
          pressHandler={() => setOpenDatePicker(true)}
          width="100%"
        />
      </View>
      <DatePicker
        date={date}
        mode="date"
        modal
        open={openDatePicker}
        onConfirm={(date) => {
          setOpenDatePicker(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpenDatePicker(false);
        }}
        androidVariant="nativeAndroid"
        textColor="#1D3777"
      />
      <Button
        label="Add transaction"
        slim
        pressHandler={handleCreate}
        width="100%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pickerStyle: {
    borderColor: '#06B3C4',
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  dropDownContainerStyle: {
    backgroundColor: 'white',
    borderColor: '#06B3C4',
  },
  placeholderStyle: { color: 'grey' },
});

export default AddTransaction;
