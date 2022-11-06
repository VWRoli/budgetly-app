import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useBudgetsContext } from '../context/BudgetsContext';
import { transactionType } from '../types/transactionType';
import { formatter } from '../utils/helpers';
//Components
import Chip from './common/Chip';
import CustomText from './common/CustomText';
import HeaderText from './common/HeaderText';

interface Props {
  txn: transactionType;
}

const TransactionCard: React.FC<Props> = ({ txn }): JSX.Element => {
  const { defaultBudget } = useBudgetsContext();

  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Text style={styles.iconText}>{txn.payee.charAt(0)}</Text>
      </View>
      <View style={styles.content}>
        <View>
          <HeaderText text={txn.payee} size={18} />
          <CustomText text={txn.categoryTitle} bold size={14} />
        </View>

        <Chip
          value={formatter(
            +txn.outflow || +txn.inflow,
            defaultBudget?.currency,
          )}
          textColor={`${txn.inflow ? '#1eff05' : 'red'}`}
          outline={txn.inflow ? false : true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    elevation: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconWrapper: {
    backgroundColor: '#06B3C4',
    borderRadius: 15,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconText: { color: '#fff', fontSize: 24 },
});

export default TransactionCard;
