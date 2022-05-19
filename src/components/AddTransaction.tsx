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
  const [open, setOpen] = useState(false);

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
            <InputSecondary placeholder="Income" styles={{ flex: 1 }} />
            <InputSecondary placeholder="Outcome" styles={{ flex: 1 }} />
          </View>
          <View style={{ margin: 5 }}>
            <Button
              label="21/05/2022"
              outlined
              paddingVertical={8}
              pressHandler={() => setOpen(true)}
            />
          </View>

          <DatePicker
            date={date}
            mode="date"
            modal
            open={open}
            onConfirm={(date) => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
            onDateChange={setDate}
            androidVariant="nativeAndroid"
            textColor="#1D3777"
          />
        </View>
      </CardWrapper>
    </View>
  );
};

export default AddTransaction;
