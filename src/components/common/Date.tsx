import React from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//Components
import CustomText from './CustomText';

const Date: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="calendar-today"
        size={60}
        color="#1D3777"
        style={{ opacity: 0.2 }}
      />
      <View style={styles.textWrapper}>
        <CustomText text="May" styles={{ fontSize: 12 }} />
        <CustomText text="2022" primary bold styles={{ fontSize: 12 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
});

export default Date;
