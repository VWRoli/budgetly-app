import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { View } from 'react-native';
import { LoginProps } from '../screens/LoginScreen';

interface Props extends LoginProps {
  props: any;
}

const CustomDrawer: React.FC<Props> = ({ props, setIsLoggedIn }) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Logout" onPress={() => setIsLoggedIn(false)} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
