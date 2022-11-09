import React from 'react';
import { View } from 'react-native';
import { setDefaultBudget } from '../../actions/budget';
import { currencyCodes } from '../../constants/currencyList';
import { useBudgetsContext } from '../../context/BudgetsContext';
import { budgetType } from '../../types/budgetType';
//Components
import CurrencyItem from '../CurrencyItem';

const OwnedBudgets = (props: { disabled?: boolean; onClose?: () => void }) => {
  const { state, dispatch } = useBudgetsContext();

  const handlePress = (currencyCode: string) => {
    const budget = state.ownedBudgets.filter(
      (b) => b.currency === currencyCode,
    )[0];
    setDefaultBudget(dispatch, budget);
    props.onClose && props.onClose();
  };

  return (
    <View>
      {currencyCodes
        .filter((cc) =>
          state.ownedBudgets?.some(
            (b: budgetType) => b.currency === cc.currencyCode,
          ),
        )
        .map((cc) => (
          <CurrencyItem
            key={cc.flagCode}
            currencyCode={cc.currencyCode}
            flagCode={cc.flagCode}
            disabled={props.disabled}
            setSelected={() => handlePress(cc.currencyCode)}
          />
        ))}
    </View>
  );
};

export default OwnedBudgets;
