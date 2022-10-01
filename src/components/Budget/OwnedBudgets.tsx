import React from 'react';
import { View } from 'react-native';
import { currencyCodes } from '../../constants/currencyList';
import { useBudgetsContext } from '../../context/BudgetsContext';
import { budgetType } from '../../types/budgetType';
//Components
import CurrencyItem from '../CurrencyItem';

const OwnedBudgets = (props: { disabled?: boolean; onClose: () => void }) => {
  const { ownedBudgets } = useBudgetsContext();
  const { setDefaultBudget } = useBudgetsContext();

  // console.log(ownedBudgets);
  const handlePress = (currencyCode: string) => {
    setDefaultBudget(
      ownedBudgets.filter((b) => b.currency === currencyCode)[0],
    );
    props.onClose();
  };

  return (
    <View>
      {currencyCodes
        .filter((cc) =>
          ownedBudgets.some((b: budgetType) => b.currency === cc.currencyCode),
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
