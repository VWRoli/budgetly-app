import React from 'react';
import CountryFlag from 'react-native-country-flag';
import cc from 'currency-codes';
import { TouchableOpacity, View } from 'react-native';
import FlagCurrencyInfo, {
  FlagCurrencyInfoProps,
} from './common/FlagCurrencyInfo';
//Components
import CustomText from './common/CustomText';

interface Props extends FlagCurrencyInfoProps {
  setSelected?: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
}

const CurrencyItem: React.FC<Props> = (props) => {
  return (
    <View
      style={{
        borderRadius: 15,
        marginVertical: 5,
        opacity: props.disabled ? 0.5 : 1,
      }}
      pointerEvents={props.disabled ? 'none' : 'auto'}
    >
      <TouchableOpacity
        onPress={() =>
          props.setSelected && props.setSelected(props.currencyCode)
        }
        style={{
          flexDirection: 'row',
          padding: 10,
          borderRadius: 15,
          backgroundColor:
            props.selected === props.currencyCode ? '#06B3C4' : '#fff',
        }}
      >
        <FlagCurrencyInfo
          flagCode={props.flagCode}
          currencyCode={props.currencyCode}
          selected={props.selected}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CurrencyItem;
