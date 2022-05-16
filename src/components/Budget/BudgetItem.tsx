import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { budgetItemType } from '../../types/budgetItemType';
import { formatter } from '../../utils/helpers';
import * as Progress from 'react-native-progress';
//Components
import CustomText from '../common/CustomText';
import Chip from '../common/Chip';

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
      <Progress.Circle
        //todo progress data not clear yet
        progress={0.7}
        color="#06B3C4"
        unfilledColor="#eee"
        borderWidth={0}
        size={60}
        strokeCap="round"
        thickness={6}
        showsText
        //shows 0 if animated is on https://github.com/oblador/react-native-progress/issues/241
        animated={false}
        formatText={(progress) => (
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            {progress * 100}%
          </Text>
        )}
      />
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
