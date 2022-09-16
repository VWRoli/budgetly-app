import React from 'react';
import { View } from 'react-native';
import CountryFlag from 'react-native-country-flag';
import cc from 'currency-codes';
//Components
import CustomText from './CustomText';

export interface FlagCurrencyInfoProps {
  selected?: string;
  flagCode: string;
  currencyCode: string;
}

const FlagCurrencyInfo: React.FC<FlagCurrencyInfoProps> = (props) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View
        style={{
          borderRadius: 10,
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <CountryFlag isoCode={props.flagCode} size={35} />
      </View>
      <View style={{ marginLeft: 5 }}>
        <CustomText
          text={cc.code(props.currencyCode)?.currency}
          primary
          bold
          styles={{
            color: props.selected === props.currencyCode ? '#fff' : '#1D3777',
          }}
        />
        <CustomText
          text={props.currencyCode}
          size={12}
          styles={{
            color: props.selected === props.currencyCode ? '#fff' : '#8B8C9E',
          }}
        />
      </View>
    </View>
  );
};

export default FlagCurrencyInfo;
