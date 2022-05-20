import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
//Components
import CardWrapper from './common/CardWrapper';
import CustomText from './common/CustomText';
import Input from './common/Input';
import Button from './common/Button';
import InputSecondary from './common/InputSecondary';

const AddTransaction = () => {
  const [date, setDate] = useState(new Date());
  const [openDatePicker, setOpenDatePicker] = useState(false);

  return (
    <View style={{ width: '85%' }}>
      <CardWrapper>
        <View style={{ width: '100%' }}>
          <InputSecondary placeholder="Payee..." />
          <InputSecondary placeholder="Category..." />
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <View style={{ flex: 1, marginRight: 2.5 }}>
              <InputSecondary placeholder="Income" />
            </View>
            <View style={{ flex: 1, marginLeft: 2.5 }}>
              <InputSecondary placeholder="Outcome" styles={{ flex: 1 }} />
            </View>
          </View>
          <View style={{ marginVertical: 5 }}>
            <Button
              label="21/05/2022"
              outlined
              slim
              pressHandler={() => setOpenDatePicker(true)}
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

          <Button label="Add transaction" slim pressHandler={() => {}} />
        </View>
      </CardWrapper>
    </View>
  );
};

export default AddTransaction;
