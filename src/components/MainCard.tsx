import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Subheading, Title } from 'react-native-paper';

interface Props {
  title: string;
  amount: number;
  currency: string;
}

const MainCard: React.FC<Props> = ({
  title,
  amount,
  currency,
}): JSX.Element => {
  return (
    <Card style={styles.card}>
      <Subheading>{title}</Subheading>
      <View style={styles.wrapper}>
        <Title>{currency}</Title>
        <Title>{amount}</Title>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '45%',
    margin: 5,
    padding: 5,
    borderRadius: 10,
  },
  wrapper: {
    flexDirection: 'row',
  },
});

export default MainCard;
