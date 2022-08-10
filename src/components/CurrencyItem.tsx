import React from 'react';
import CountryFlag from 'react-native-country-flag';
import cc from 'currency-codes';
import { TouchableOpacity, View } from 'react-native';
//Components
import CustomText from './common/CustomText';

interface Props {
  flagCode: string;
  currencyCode: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
}

const CurrencyItem: React.FC<Props> = ({
  flagCode,
  currencyCode,
  selected,
  setSelected,
  disabled,
}) => {
  return (
    <View
      style={{
        borderRadius: 15,
        marginVertical: 5,
        opacity: disabled ? 0.5 : 1,
      }}
      pointerEvents={disabled ? 'none' : 'auto'}
    >
      <TouchableOpacity
        onPress={() => setSelected(currencyCode)}
        style={{
          flexDirection: 'row',
          padding: 10,
          borderRadius: 15,
          backgroundColor: selected === currencyCode ? '#06B3C4' : '#fff',
        }}
      >
        <View
          style={{
            borderRadius: 15,
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <CountryFlag isoCode={flagCode} size={35} />
        </View>
        <View style={{ marginLeft: 5 }}>
          <CustomText
            text={cc.code(currencyCode)?.currency}
            primary
            bold
            styles={{ color: selected === currencyCode ? '#fff' : '#1D3777' }}
          />
          <CustomText
            text={currencyCode}
            size={12}
            styles={{ color: selected === currencyCode ? '#fff' : '#8B8C9E' }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CurrencyItem;
