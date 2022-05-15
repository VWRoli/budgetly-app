import React from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { budgetItemType } from '../../types/budgetItemType';
import { formatter } from '../../utils/helpers';
//Components
import CustomText from '../common/CustomText';
import Chip from '../common/Chip';
import Date from '../common/Date';

interface Props {
  item: budgetItemType;
}
const BudgetItem: React.FC<Props> = ({ item }): JSX.Element => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.title}>
          <MaterialCommunityIcons
            name="web"
            size={20}
            color="#1D3777"
            style={{ marginRight: 5 }}
          />
          <CustomText text={item.title} />
        </View>

        <Chip value={formatter(item.balance)} />
      </View>
      <Date />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderWidth: 2,
    marginVertical: 8,
    borderRadius: 15,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: { flexDirection: 'row', alignItems: 'center' },
});

export default BudgetItem;
