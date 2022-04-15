import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Chip, Text, Title } from 'react-native-paper';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

interface Props {
  title: string;
  budgeted: number;
}

const BudgetItem: React.FC<Props> = ({ title, budgeted }): JSX.Element => {
  return (
    <Card style={styles.card}>
      <Card.Content style={styles.card}>
        <View style={{ flex: 5 }}>
          <Title>{title}</Title>
          <Chip icon="information" style={{ width: '50%' }}>
            {budgeted} HUF
          </Chip>
        </View>
        <AnimatedCircularProgress
          size={70}
          width={10}
          fill={80}
          tintColor="#1976d2"
          backgroundColor="#d0d0d0"
          style={{ flex: 1 }}
        >
          {() => <Text>{80}</Text>}
        </AnimatedCircularProgress>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '95%',
    flexDirection: 'row',
    borderRadius: 10,
  },
});

export default BudgetItem;
