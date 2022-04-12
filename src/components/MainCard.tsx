import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Subheading, Title } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  title: string;
  amount: number;
  currency: string;
  color: string[];
}

const MainCard: React.FC<Props> = ({
  title,
  amount,
  currency,
  color,
}): JSX.Element => {
  return (
    <LinearGradient colors={color} style={styles.card}>
      <Subheading style={{ color: '#fff' }}>{title}</Subheading>
      <View style={styles.wrapper}>
        <Title style={styles.title}>{currency}</Title>
        <Title style={styles.title}>{amount}</Title>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '47%',
    margin: 5,
    padding: 5,
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 5,
  },
  wrapper: {
    flexDirection: 'row',
  },
});

export default MainCard;
