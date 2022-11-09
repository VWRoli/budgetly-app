import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { getTransactions } from '../../actions/transactions';
import { useBudgetsContext } from '../../context/BudgetsContext';
import { accountType } from '../../types/accountType';
import { formatter } from '../../utils/helpers';
//Components
import CustomText from '../common/CustomText';

interface Props {
  account: accountType;
  onClose: () => void;
}
const AccountListItem: React.FC<Props> = ({ account, onClose }) => {
  const { state, dispatch } = useBudgetsContext();

  const handleFetch = (accountId?: string) => {
    getTransactions(dispatch, accountId);
    onClose();
  };
  return (
    <TouchableOpacity
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
      onPress={() => handleFetch(account._id)}
    >
      <CustomText text={account.name} primary bold />
      <CustomText
        text={formatter(account.balance, state.defaultBudget?.currency)}
        bold
      />
    </TouchableOpacity>
  );
};

export default AccountListItem;
