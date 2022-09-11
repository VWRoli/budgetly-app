import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import CountryFlag from 'react-native-country-flag';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//Components
import CustomText from '../common/CustomText';
import HeaderText from '../common/HeaderText';

const AccountTab = () => {
  return (
    <View
      style={{
        borderRadius: 15,
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <CountryFlag isoCode={'hu'} size={35} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ marginRight: 20, alignItems: 'center' }}>
          <CustomText text="Balance" />
          <HeaderText text="15654" />
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name={'chevron-down-circle-outline'}
            size={20}
            color={'#06B3C4'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountTab;
