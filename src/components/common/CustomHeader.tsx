import React from 'react';
import { View } from 'react-native';
import { useAuthContext } from '../../context/AuthContext';
//Components
import CustomText from './CustomText';
import IconButton from './IconButton';

interface Props {
  headerText: string;
  leftIcon: string;
  pressHandler: () => void;
}
const CustomHeader: React.FC<Props> = ({
  headerText,
  leftIcon,
  pressHandler,
}) => {
  const { signOut } = useAuthContext();
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
      }}
    >
      <IconButton
        pressHandler={pressHandler}
        type="secondary"
        icon={leftIcon}
      />
      <CustomText text={headerText} primary bold />
      <IconButton
        icon="exit-to-app"
        type="secondary"
        pressHandler={() => signOut()}
      />
    </View>
  );
};

export default CustomHeader;
