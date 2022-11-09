import React from 'react';
import { View } from 'react-native';
import { useBudgetsContext } from '../../context/BudgetsContext';
import { accountType } from '../../types/accountType';
import { formatter } from '../../utils/helpers';
//Components
import CustomText from '../common/CustomText';

interface Props {
  account: accountType;
}
const AccountListItem: React.FC<Props> = ({ account }) => {
  const { state } = useBudgetsContext();
  return (
    <View
      key={account._id}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        backgroundColor: '#eee',
        borderRadius: 15,
        padding: 10,
        elevation: 3,
        marginVertical: 5,
      }}
    >
      <CustomText text={account.name} primary bold />
      <CustomText
        text={formatter(account.balance, state.defaultBudget?.currency)}
        bold
      />
    </View>
  );
};

export default AccountListItem;
