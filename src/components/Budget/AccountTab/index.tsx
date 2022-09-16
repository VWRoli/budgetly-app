import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import CountryFlag from 'react-native-country-flag';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { formatter } from '../../../utils/helpers';
import RBSheet from 'react-native-raw-bottom-sheet';
//Components
import HeaderText from '../../common/HeaderText';
import OwnedBudgets from '../OwnedBudgets';
import FlagCurrencyInfo from '../../common/FlagCurrencyInfo';
import Drawer from './Drawer';

const AccountTab = () => {
  //todo RBSheet typerror, npm package error does not support propswithchildren
  const refRBSheet = React.createRef<RBSheet>();

  return (
    <View style={styles.wrapper}>
      <FlagCurrencyInfo flagCode="hu" currencyCode="huf" />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ marginRight: 20, alignItems: 'center' }}>
          <HeaderText text={formatter(16514)} />
        </View>
        <TouchableOpacity onPress={() => refRBSheet.current!.open()}>
          <MaterialCommunityIcons
            name={'chevron-down-circle-outline'}
            size={20}
            color={'#06B3C4'}
          />
        </TouchableOpacity>
      </View>
      <RBSheet
        ref={refRBSheet}
        height={300}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <Drawer />
      </RBSheet>
    </View>
  );
};

export default AccountTab;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 15,
    backgroundColor: 'white',
    padding: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flagWrapper: {
    borderRadius: 10,
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
