import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { createAccount } from '../../actions/accounts';
import { useBudgetsContext } from '../../context/BudgetsContext';
//Components
import Button from '../common/Button';
import InputSecondary from '../common/InputSecondary';
import AccountListItem from './AccountListItem';

interface Props {
  handleClose: () => void;
}
const AccountDrawer: React.FC<Props> = ({ handleClose }) => {
  const { state, dispatch } = useBudgetsContext();
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('');

  const handleCreate = () => {
    const newAccount = {
      name,
      balance: +balance,
      budgetId: state.defaultBudget?._id || '',
    };
    createAccount(dispatch, newAccount);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.buttonWrapper}>
        <Button
          label="Add new"
          pressHandler={handleCreate}
          slim
          width="20%"
          disabled={!name || !balance}
        />
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
        <AccountListItem
          account={{ name: 'All', balance: 0, budgetId: '', _id: '' }}
          onClose={handleClose}
        />
        {state.defaultBudget?.accounts.map((a) => (
          <AccountListItem account={a} key={a._id} onClose={handleClose} />
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
