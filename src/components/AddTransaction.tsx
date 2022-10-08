import React, { useState } from 'react';
import { View } from 'react-native';
import DatePicker from 'react-native-date-picker';
//Components
import Button from './common/Button';
import InputSecondary from './common/InputSecondary';

const AddTransaction = () => {
  const [date, setDate] = useState(new Date());
  const [openDatePicker, setOpenDatePicker] = useState(false);

  return (
    <View style={{ width: '95%' }}>
      <InputSecondary
        placeholder="Payee..."
        changeHandler={() => {}}
        value="1"
      />
      <InputSecondary
        placeholder="Category..."
        changeHandler={() => {}}
        value="1"
      />
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View style={{ flex: 1, marginRight: 2.5 }}>
          <InputSecondary
            placeholder="Income"
            changeHandler={() => {}}
            value="1"
          />
        </View>
        <View style={{ flex: 1, marginLeft: 2.5 }}>
          <InputSecondary
            placeholder="Outcome"
            styles={{ flex: 1 }}
            changeHandler={() => {}}
            value="1"
          />
        </View>
      </View>
      <View style={{ marginVertical: 5 }}>
        <Button
          label="21/05/2022"
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
        onDateChange={setDate}
        androidVariant="nativeAndroid"
        textColor="#1D3777"
      />
      <Button
        label="Add transaction"
        slim
        pressHandler={() => {}}
        width="100%"
      />
    </View>
  );
};

export default AddTransaction;
