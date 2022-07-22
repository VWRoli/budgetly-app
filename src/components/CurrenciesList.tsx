import React, { useState } from 'react';
import { View } from 'react-native';
//Components
import CurrencyItem from './CurrencyItem';
import { currencyCodes } from '../constants/currencyList';

interface Props {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const CurrenciesList: React.FC<Props> = ({
  selected,
  setSelected,
}): JSX.Element => {
  return (
    <View>
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
