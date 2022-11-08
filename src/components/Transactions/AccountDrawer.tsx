import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useBudgetsContext } from '../../context/BudgetsContext';
import { formatter } from '../../utils/helpers';
//Components
import Button from '../common/Button';
import CustomText from '../common/CustomText';
import InputSecondary from '../common/InputSecondary';

const AccountDrawer = () => {
  const { state } = useBudgetsContext();
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('');
  return (
    <View style={styles.wrapper}>
      <View style={styles.buttonWrapper}>
        <Button label="Add new" pressHandler={() => {}} slim width="20%" />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
          }}
        >
          <View style={{ flex: 1, marginRight: 2.5 }}>
            <InputSecondary
              placeholder="Name"
              value={name}
              editable
              changeHandler={setName}
            />
          </View>
          <View style={{ flex: 1, marginRight: 2.5 }}>
            <InputSecondary
              placeholder="Starting balance"
              value={balance}
              editable
              keyboardType="numeric"
              changeHandler={setBalance}
            />
          </View>
        </View>
      </View>
      <View>
        {state.defaultBudget?.accounts.map((a) => (
          <View>
            <CustomText text={a.name} />
            <CustomText text={formatter(a.balance)} />
          </View>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  buttonWrapper: {
    alignItems: 'flex-end',
    padding: 5,
    paddingTop: 10,
  },
});

export default AccountDrawer;
