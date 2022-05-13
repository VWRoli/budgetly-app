import React from 'react';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//Components
import CustomText from '../common/CustomText';
import Date from '../common/Date';

const BudgetItem = () => {
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
      <View style={{}}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons
            name="web"
            size={20}
            color="#1D3777"
            style={{ marginRight: 5 }}
          />
          <CustomText text="Internet" />
        </View>
        {/* Todo this is a chip */}
        <View>
          <Text>HUF 3059</Text>
        </View>
      </View>
      <Date />
    </View>
  );
};

export default BudgetItem;
