import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//Components
import Button from '../../common/Button';
import OwnedBudgets from '../OwnedBudgets';

type Nav = {
  navigate: (value: string) => void;
};

const Drawer = () => {
  const { navigate } = useNavigation<Nav>();

  return (
    <View style={styles.wrapper}>
      <View style={styles.buttonWrapper}>
        <Button
          label="Add"
          pressHandler={() => navigate('CreateBudget')}
          slim
          width="15%"
        />
      </View>
      <OwnedBudgets />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  buttonWrapper: {
    alignItems: 'flex-end',
    padding: 5,
  },
});

export default Drawer;
