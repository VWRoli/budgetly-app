import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavType } from '../../../types/navType';
//Components
import Button from '../../common/Button';
import OwnedBudgets from '../OwnedBudgets';

const Drawer = ({ onClose }: { onClose: () => void }) => {
  const { navigate } = useNavigation<NavType>();

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
      <OwnedBudgets onClose={onClose} />
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
    paddingTop: 10,
  },
});

export default Drawer;
