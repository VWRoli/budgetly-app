import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { BASE_URL, skeletonArray } from '../constants/constants';
import { useFetch } from '../hooks/useFetch';
import { transactionType } from '../types/transactionType';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//Components
import TransactionCard from '../components/TransactionCard';
import CircularIcon from '../components/common/CircularIcon';
import SkeletonTransaction from '../components/Skeletons/SkeletonTransaction';

const TransactionsScreen = () => {
  const {
    data: transactions,
    isLoading,
    isError,
  } = useFetch(`${BASE_URL}users/1/transactions`);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
        }}
        style={{
          flex: 1,
          backgroundColor: '#f8f7f7',
        }}
      >
        <View style={{ width: '85%' }}>
          {isLoading
            ? skeletonArray.map((_, i) => <SkeletonTransaction key={i} />)
            : transactions.map((tr: transactionType) => (
                <TransactionCard
                  key={tr.id}
                  payee={tr.payee}
                  amount={tr.amount}
                  date={tr.date}
                  category={
                    tr.income
                      ? 'Income'
                      : `${tr.categoryTitle}/${tr.budgetItemTitle}`
                  }
                />
              ))}
        </View>
      </ScrollView>
      <TouchableOpacity activeOpacity={0.7} style={styles.fab}>
        <CircularIcon size={45} bgColor="#1eff05">
          <Icon name="plus-thick" color="#fff" size={30} />
        </CircularIcon>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 25,
    left: Dimensions.get('screen').width / 2 - 22.5,
    alignSelf: 'flex-end',
  },
});
export default TransactionsScreen;
