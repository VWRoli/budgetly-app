import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { TouchableOpacity, View, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props {
  props: any;
}

const CustomDrawer: React.FC<Props> = ({ props }) => {
  const ScreenHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <DrawerContentScrollView {...props}>
        <View
          style={{
            height: ScreenHeight - 50,
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              paddingTop: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
            }}
          >
            <DrawerItemList {...props} />
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 12,
                  marginLeft: 25,
                  marginBottom: 5,
                  color: '#1E84F3',
                }}
              >
                You are logged in as,
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 25,
                  color: '#1E84F3',
                }}
              >
                DemoUser
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {}}
              style={{ paddingVertical: 15, marginLeft: 25 }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialIcons name="logout" size={22} color="#1E84F3" />
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 8,
                    color: '#1E84F3',
                  }}
                >
                  Log out
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
