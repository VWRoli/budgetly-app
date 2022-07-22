import React from 'react';
import CountryFlag from 'react-native-country-flag';
import cc from 'currency-codes';
import { TouchableOpacity, View } from 'react-native';
//Components
import CustomText from './common/CustomText';

interface Props {
  c: {
    flagCode: string;
    currencyCode: string;
  };
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const CurrencyItem: React.FC<Props> = ({ c, selected, setSelected }) => {
  return (
    <View
      style={{
        borderRadius: 15,
        margin: 5,
      }}
    >
      <TouchableOpacity
        onPress={() => setSelected(c.currencyCode)}
        style={{
          flexDirection: 'row',
          padding: 10,
          borderRadius: 15,
          backgroundColor: selected === c.currencyCode ? '#06B3C4' : '#fff',
        }}
      >
        <View
          style={{
            borderRadius: 15,
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <CountryFlag isoCode={c.flagCode} size={35} />
        </View>
        <View style={{ marginLeft: 5 }}>
          <CustomText
            text={cc.code(c.currencyCode)?.currency}
            primary
            bold
            styles={{ color: selected === c.currencyCode ? '#fff' : '#1D3777' }}
          />
          <CustomText
            text={c.currencyCode}
            size={12}
            styles={{ color: selected === c.currencyCode ? '#fff' : '#8B8C9E' }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CurrencyItem;
