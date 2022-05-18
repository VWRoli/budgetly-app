import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { formatter } from '../utils/helpers';
import Chip from './common/Chip';
import CustomText from './common/CustomText';
import HeaderText from './common/HeaderText';

interface Props {
  payee: string;
  amount: number;
  date: string;
  category: string;
}

const TransactionCard: React.FC<Props> = ({
  payee,
  amount,
  date,
  category,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Text style={styles.iconText}>{payee.charAt(0)}</Text>
      </View>
      <View style={styles.content}>
        <View>
          <HeaderText text={payee} size={18} />
          <CustomText text={category} bold size={14} />
        </View>

        <Chip
          value={formatter(amount)}
          textColor={`${category === 'Income' ? '#1eff05' : 'red'}`}
          outline={category === 'Income' ? false : true}
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
    borderColor: '#eee',
    borderWidth: 2,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
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
