import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useBudgetsContext } from '../context/BudgetsContext';
import { transactionType } from '../types/transactionType';
import { formatter } from '../utils/helpers';
import CardWrapper from './common/CardWrapper';
import Chip from './common/Chip';
import CustomText from './common/CustomText';
import HeaderText from './common/HeaderText';

interface Props {
  trx: transactionType;
}

const TransactionCard: React.FC<Props> = ({ trx }): JSX.Element => {
  const { defaultBudget } = useBudgetsContext();

  return (
    <CardWrapper>
      <View style={styles.iconWrapper}>
        <Text style={styles.iconText}>{trx.payee.charAt(0)}</Text>
      </View>
      <View style={styles.content}>
        <View>
          <HeaderText text={trx.payee} size={18} />
          <CustomText text={trx.categoryTitle} bold size={14} />
        </View>

        <Chip
          value={formatter(trx.amount, defaultBudget?.currency)}
          textColor={`${trx.income ? '#1eff05' : 'red'}`}
          outline={trx.income ? false : true}
        />
      </View>
    </CardWrapper>
  );
};

const styles = StyleSheet.create({
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
