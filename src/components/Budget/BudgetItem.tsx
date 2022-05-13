import React from 'react';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//Components
import CustomText from '../common/CustomText';
import Chip from '../common/Chip';
import Date from '../common/Date';

const BudgetItem: React.FC = (): JSX.Element => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderColor: '#eee',
        borderWidth: 2,
        marginVertical: 8,
        borderRadius: 15,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons
            name="web"
            size={20}
            color="#1D3777"
            style={{ marginRight: 5 }}
          />
          <CustomText text="Internet" />
        </View>

        <Chip value="HUF 3059" />
      </View>
      <Date />
    </View>
  );
};

export default BudgetItem;
