import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { userType } from '../types/userType';
import { formatter } from '../utils/helpers';
//Components
import CustomText from './common/CustomText';
import HeaderText from './common/HeaderText';

interface Props {
  data: userType;
}

const MainCard: React.FC<Props> = ({ data }): JSX.Element => {
  return (
    <LinearGradient
      colors={[
        'rgba(139, 140, 158, 0.15)',
        'rgba(139, 140, 158, 0.2)',
        'rgba(139, 140, 158, 0.3)',
      ]}
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      style={styles.container}
    >
      <CustomText text="My Balance" />

      <HeaderText text={`${formatter(data.balance)}`} />
      <View style={styles.tab}>
        <Text style={styles.tabText}>Avialable to Budget</Text>
        <Text style={styles.availableText}>{`${formatter(
          data.available,
        )}`}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    width: '85%',
    paddingBottom: 50,
    paddingTop: 25,
    paddingHorizontal: 15,
  },
  tab: {
    position: 'absolute',
    bottom: -20,
    left: 25,
    alignItems: 'center',
    backgroundColor: '#06B3C4',
    borderRadius: 35,
    paddingVertical: 10,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  availableText: { color: '#1eff05', fontWeight: 'bold', fontSize: 16 },
  tabText: { color: '#fff', fontWeight: 'bold' },
});

export default MainCard;
