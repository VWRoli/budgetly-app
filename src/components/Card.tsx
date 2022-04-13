import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Subheading, Title } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  title: string;
  amount: number;
  currency: string;
  color: string[];
  iconName: string;
}

const Card: React.FC<Props> = ({
  title,
  amount,
  currency,
  color,
  iconName,
}): JSX.Element => {
  return (
    <LinearGradient colors={color} style={styles.card}>
      <Icon name={iconName} style={styles.icon} size={20} color="#fff" />
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
  icon: {
    position: 'absolute',
    top: 8,
    right: 10,
    opacity: 0.5,
  },
});

export default Card;
