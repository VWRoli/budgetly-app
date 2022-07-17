import React, { useState } from 'react';
import { View } from 'react-native';
//Components
import CurrencyItem from './CurrencyItem';
import HeaderText from './common/HeaderText';
import { currencyCodes } from '../constants/currencyList';

const CurrenciesList = () => {
  const [selected, setSelected] = useState<string>('EUR');
  return (
    <View>
      <HeaderText text="Add new account" styles={{ paddingLeft: 15 }} />
      <View>
        {currencyCodes.map((c) => (
          <CurrencyItem
            key={c.flagCode}
            c={c}
            setSelected={setSelected}
            selected={selected}
          />
        ))}
      </View>
    </View>
  );
};

export default CurrenciesList;
