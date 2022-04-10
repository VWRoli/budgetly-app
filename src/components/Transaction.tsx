import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';

const LeftContent = () => (
  <Avatar.Image size={40} source={require('../assets/shop-placeholder.png')} />
);

interface RightProps {
  amount: number;
  currency: string;
}

const RightContent: React.FC<RightProps> = ({ amount, currency }) => (
  <View>
    <Text>{amount}</Text>
    <Text>{currency}</Text>
  </View>
);

interface Props {
  props: {
    id: string;
    date: number;
    transactionName: string;
    amount: number;
    currency: string;
  };
}
const Transaction: React.FC<Props> = (props): JSX.Element => {
  const { transactionName, date, amount, currency } = props.props;
  return (
    <Card style={styles.container}>
      <Card.Title title={transactionName} subtitle={date} left={LeftContent} />
      <Card.Content>
        <RightContent amount={amount} currency={currency} />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: '90%',
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
  },
});

export default Transaction;
