import React from 'react';
import { StyleSheet, View } from 'react-native';
import { formatter } from '../../../utils/helpers';
import RBSheet from 'react-native-raw-bottom-sheet';
//Components
import HeaderText from '../../common/HeaderText';
import FlagCurrencyInfo from '../../common/FlagCurrencyInfo';
import Drawer from './Drawer';
import IconButton from '../../common/IconButton';

const AccountTab = () => {
  //RBSheet typeerror, npm package error does not support propswithchildren, added manually
  const refRBSheet = React.createRef<RBSheet>();

  return (
    <View style={styles.wrapper}>
      <FlagCurrencyInfo flagCode="hu" currencyCode="huf" />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ marginRight: 20, alignItems: 'center' }}>
          <HeaderText text={formatter(16514)} />
        </View>
        <IconButton
          icon="chevron-down-circle-outline"
          pressHandler={() => refRBSheet.current!.open()}
          type="secondary"
        />
      </View>
      <RBSheet
        ref={refRBSheet}
        height={330}
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
