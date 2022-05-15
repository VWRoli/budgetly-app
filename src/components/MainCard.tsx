import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BASE_URL } from '../constants/constants';
import { useFetch } from '../hooks/useFetch';
import { userType } from '../types/userType';
import { formatter } from '../utils/helpers';
//Components
import CustomText from './common/CustomText';
import HeaderText from './common/HeaderText';
import Skeleton from './common/Skeleton';

const MainCard: React.FC = (): JSX.Element => {
  const { data, isLoading, isError } = useFetch(`${BASE_URL}users/1`);

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
      {isLoading ? (
        <Skeleton height={35} width={175} />
      ) : (
        <HeaderText text={`${formatter(data.balance)}`} />
      )}

      <View style={styles.tab}>
        <Text style={styles.tabText}>Avialable to Budget</Text>
        {isLoading ? (
          <></>
        ) : (
          <Text style={styles.availableText}>{`${formatter(
            data.available,
          )}`}</Text>
        )}
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
