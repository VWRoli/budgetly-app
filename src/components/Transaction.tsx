import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, Paragraph, Text, Title } from 'react-native-paper';

const LeftContent: React.FC = (): JSX.Element => (
  <Avatar.Image size={40} source={require('../assets/shop-placeholder.png')} />
);

const RightContent: React.FC = (): JSX.Element => (
  <Card.Content style={styles.right}>
    <Title>500</Title>
    <Paragraph>HUF</Paragraph>
  </Card.Content>
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
  const { transactionName, date } = props.props;
  return (
    <Card style={styles.container}>
      <Card.Title
        title={transactionName}
        subtitle={date}
        left={LeftContent}
        right={RightContent}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: '90%',
    marginBottom: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 3,
  },
  right: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Transaction;
