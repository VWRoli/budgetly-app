import React from 'react';
import { View } from 'react-native';
import { currencyCodes } from '../../constants/currencyList';
import { useBudgetsContext } from '../../context/BudgetsContext';
//Components
import CurrencyItem from '../CurrencyItem';

const OwnedBudgets = () => {
  const { ownedBudgets } = useBudgetsContext();

  return (
    <View>
      {currencyCodes
        .filter((cc) =>
          ownedBudgets.some((acc: any) => acc.currency === cc.currencyCode),
        )
        .map((cc) => (
          <CurrencyItem
            key={cc.flagCode}
            currencyCode={cc.currencyCode}
            flagCode={cc.flagCode}
            //disabled
          />
        ))}
    </View>
  );
};

export default OwnedBudgets;
