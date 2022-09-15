import React from 'react';
import { View } from 'react-native';
import { BASE_URL } from '../../constants/constants';
import { currencyCodes } from '../../constants/currencyList';
import { useBudgetsContext } from '../../context/BudgetsContext';
import { useFetch } from '../../hooks/useFetch';
//Components
import CurrencyItem from '../CurrencyItem';

const OwnedBudgets = () => {
  const { ownedBudgets } = useBudgetsContext();
  console.log(ownedBudgets);
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
            disabled
          />
        ))}
    </View>
  );
};

export default OwnedBudgets;
