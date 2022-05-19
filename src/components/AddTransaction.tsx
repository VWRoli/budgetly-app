import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
//Components
import CardWrapper from './common/CardWrapper';
import CustomText from './common/CustomText';

const AddTransaction = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View style={{ width: '85%' }}>
      <CardWrapper>
        <Button title="Open" onPress={() => setOpen(true)} />
        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          textColor="#1D3777"
          onConfirm={(date) => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <TextInput
          editable
          maxLength={40}
          placeholder="Payee..."
          style={{
            borderColor: '#06B3C4',
            borderWidth: 1,
            borderRadius: 15,
            paddingVertical: 0,
            paddingHorizontal: 10,
            width: '50%',
          }}
        />
        <TextInput
          editable
          maxLength={40}
          placeholder="Amount..."
          style={{
            borderColor: '#06B3C4',
            borderWidth: 1,
            borderRadius: 15,
            paddingVertical: 0,
            paddingHorizontal: 10,
            width: '50%',
          }}
        />
        <TextInput
          editable
          maxLength={40}
          placeholder="Category..."
          style={{
            borderColor: '#06B3C4',
            borderWidth: 1,
            borderRadius: 15,
            paddingVertical: 0,
            paddingHorizontal: 10,
            width: '50%',
          }}
        />
      </CardWrapper>
    </View>
  );
};

export default AddTransaction;
