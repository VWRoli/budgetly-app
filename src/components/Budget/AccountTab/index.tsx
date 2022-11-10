import React from 'react';
import { StyleSheet, View } from 'react-native';
import { formatter } from '../../../utils/helpers';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useBudgetsContext } from '../../../context/BudgetsContext';
import { currencyCodes } from '../../../constants/currencyList';
//Components
import HeaderText from '../../common/HeaderText';
import FlagCurrencyInfo from '../../common/FlagCurrencyInfo';
import Drawer from './Drawer';
import IconButton from '../../common/IconButton';
import SkeletonAccountTab from '../../Skeletons/SkeletonAccountTab';

const AccountTab = () => {
  //RBSheet typeerror, npm package error does not support propswithchildren, added manually
  const refRBSheet = React.createRef<RBSheet>();

  const { state } = useBudgetsContext();

  return (
    <View style={styles.wrapper}>
      {state.loading ? (
        <SkeletonAccountTab />
      ) : (
        <>
          <FlagCurrencyInfo
            flagCode={
              currencyCodes.filter(
                (cc) => cc.currencyCode === state.defaultBudget?.currency,
              )[0]?.flagCode
            }
            currencyCode={state.defaultBudget?.currency || ''}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginRight: 20, alignItems: 'center' }}>
              <HeaderText
                text={
                  state.defaultBudget
                    ? formatter(
                        state.defaultBudget?.available,
                        state.defaultBudget.currency,
                      )
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
        <Drawer onClose={() => refRBSheet.current!.close()} />
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
    elevation: 10,
    marginBottom: 25,
  },
  flagWrapper: {
    borderRadius: 10,
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
