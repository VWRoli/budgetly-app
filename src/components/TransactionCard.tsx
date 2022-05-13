import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
      <View style={{ flex: 1 }}>
        <View style={styles.alignText}>
          <HeaderText text={payee} size={18} />
          <HeaderText text={`HUF ${amount}`} size={18} />
        </View>
        <View style={styles.alignText}>
          <CustomText text={category} bold size={14} />
          <CustomText text={date.split('T')[0]} size={14} />
        </View>
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
  iconText: { color: '#fff', fontSize: 24 },
  alignText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
});

export default TransactionCard;
