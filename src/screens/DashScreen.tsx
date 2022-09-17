import React, { useEffect, useState } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { BASE_URL } from '../constants/constants';
import { useFetch } from '../hooks/useFetch';
import * as api from '../api';
import { categoryType } from '../types/categoryType';
//Components
import AccountTab from '../components/Budget/AccountTab';
import AddCategoryDrawer from '../components/Budget/AddCategoryDrawer';
import Category from '../components/Budget/Category';
import Button from '../components/common/Button';
import CustomText from '../components/common/CustomText';
import Loading from '../components/common/Loading';
import MonthHeader from '../components/common/MonthHeader';
import { useFocusEffect } from '@react-navigation/native';

const DashScreen: React.FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<categoryType[]>([]);
  const refRBSheet = React.createRef<RBSheet>();

  const fetchCategories = async () => {
    try {
      const { data } = await api.getCategories();
      setCategories(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCategories();
  }, [isLoading]);

  useFocusEffect(
    React.useCallback(() => {
      return () => refRBSheet.current?.close();
    }, []),
  );

  // const {
  //   data: categories,
  //   isLoading,
  //   isError,
  // } = useFetch(`${BASE_URL}categories`);

  // if (isLoading) {
  //   return (
  //     <View style={styles.container}>
  //       <MonthHeader />
  //       <View style={{ padding: 10 }}>
  //         <AccountTab />
  //       </View>
  //       <Loading />
  //     </View>
  //   );
  // }
  console.log(refRBSheet);
  return (
    <View style={styles.container}>
      <MonthHeader />
      <View style={{ padding: 10 }}>
        <AccountTab />
      </View>
      {!isLoading && !categories?.length && (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CustomText
            text="You don't have any categories or budget items yet."
            styles={{ marginVertical: 20 }}
          />
          <Button
            label="Add your first category"
            pressHandler={() => refRBSheet.current?.open()}
          />
        </View>
      )}
      {isLoading ? (
        <Loading />
      ) : (
        categories?.map((c: categoryType) => (
          <Category
            key={c._id}
            category={c}
            onOpen={() => refRBSheet.current!.open()}
          />
        ))
      )}
      <RBSheet
        ref={refRBSheet}
        height={150}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <AddCategoryDrawer
          setLoading={setIsLoading}
          onClose={() => refRBSheet.current?.close()}
        />
      </RBSheet>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryWrapper: { paddingTop: 35, width: '95%', justifyContent: 'center' },
});
export default DashScreen;
