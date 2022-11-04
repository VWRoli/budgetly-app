import React, { useReducer, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useBudgetsContext } from '../context/BudgetsContext';
import { formReducer, INITIAL_STATE } from '../reducers/txnFormReducer';
import { TXN_FORM_ACTION_TYPES } from '../types/actions/txnFormActionType';
//Components
import Button from './common/Button';
import InputSecondary from './common/InputSecondary';
import { getCategoryDropdownValues } from '../utils/helpers';

const AddTransaction = () => {
  const { defaultBudget, state: budgetState } = useBudgetsContext();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [date, setDate] = useState(new Date());
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const [openDatePicker, setOpenDatePicker] = useState(false);

  const handleCreate = () => {
    const newTransaction = {
      ...state,
      income: +state.income,
      outcome: +state.outcome,
      budgetId: defaultBudget?._id,
    };
    console.log(newTransaction);
  };

  const dropdownItems = getCategoryDropdownValues(budgetState.categories);
  console.log(dropdownItems);
  return (
    <View style={{ width: '95%' }}>
      <InputSecondary
        editable
        placeholder="Payee..."
        changeHandler={(text) =>
          dispatch({ type: TXN_FORM_ACTION_TYPES.CHANGE_PAYEE, payload: text })
        }
        value={state.payee}
      />
      <DropDownPicker
        open={open}
        value={value}
        items={dropdownItems || []}
        setOpen={setOpen}
        setValue={setValue}
      />
      {/* <InputSecondary
        editable
        placeholder="Category..."
        changeHandler={(text) =>
          dispatch({
            type: TXN_FORM_ACTION_TYPES.CHANGE_CATEGORY,
            payload: text,
          })
        }
        value={state.categoryTitle}
      /> */}
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View style={{ flex: 1, marginRight: 2.5 }}>
          <InputSecondary
            placeholder="Income"
            changeHandler={(text) =>
              dispatch({
                type: TXN_FORM_ACTION_TYPES.CHANGE_INCOME,
                payload: text,
              })
            }
            keyboardType="numeric"
            editable={!state.outcome}
            value={state.income}
          />
        </View>
        <View style={{ flex: 1, marginLeft: 2.5 }}>
          <InputSecondary
            placeholder="Outcome"
            styles={{ flex: 1 }}
            keyboardType="numeric"
            editable={!state.income}
            changeHandler={(text) =>
              dispatch({
                type: TXN_FORM_ACTION_TYPES.CHANGE_OUTCOME,
                payload: text,
              })
            }
            value={state.outcome}
          />
        </View>
      </View>
      <View style={{ marginVertical: 5 }}>
        <Button
          label={state.date.substring(0, 10)}
          slim
          pressHandler={() => setOpenDatePicker(true)}
          width="100%"
        />
      </View>
      <DatePicker
        date={new Date(state.date)}
        mode="date"
        modal
        open={openDatePicker}
        onConfirm={(date) => {
          setOpenDatePicker(false);
          setDate(date);
          dispatch({
            type: TXN_FORM_ACTION_TYPES.CHANGE_DATE,
            payload: date.toISOString(),
          });
        }}
        onCancel={() => {
          setOpenDatePicker(false);
        }}
        onDateChange={() =>
          dispatch({
            type: TXN_FORM_ACTION_TYPES.CHANGE_DATE,
            payload: date.toISOString(),
          })
        }
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

export default AddTransaction;
