import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { formatter } from '../../../utils/helpers';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useFetchDefaultBudget } from '../../../hooks/useFetchDefaultBudget';
//Components
import HeaderText from '../../common/HeaderText';
import FlagCurrencyInfo from '../../common/FlagCurrencyInfo';
import Drawer from './Drawer';
import IconButton from '../../common/IconButton';
import { currencyCodes } from '../../../constants/currencyList';

const AccountTab = () => {
  //RBSheet typeerror, npm package error does not support propswithchildren, added manually
  const refRBSheet = React.createRef<RBSheet>();

  const { defaultBudget, isLoading } = useFetchDefaultBudget();

  return (
    <View style={styles.wrapper}>
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        <>
          <FlagCurrencyInfo
            flagCode={
              currencyCodes.filter(
                (cc) => cc.currencyCode === defaultBudget?.currency,
              )[0].flagCode
            }
            currencyCode={defaultBudget?.currency || ''}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginRight: 20, alignItems: 'center' }}>
              <HeaderText
                text={
                  defaultBudget
                    ? formatter(defaultBudget?.balance, defaultBudget.currency)
                    : '0'
                }
              />
            </View>
            <IconButton
              icon="chevron-down-circle-outline"
              pressHandler={() => refRBSheet.current!.open()}
              type="secondary"
            />
          </View>
        </>
      )}

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
