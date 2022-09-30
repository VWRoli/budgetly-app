import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import * as api from '../api';
import { categoryType } from '../types/categoryType';
//Components
import AccountTab from '../components/Budget/AccountTab';
import AddCategoryDrawer from '../components/Budget/Drawers/AddCategoryDrawer';
import Category from '../components/Budget/Category';
import Button from '../components/common/Button';
import CustomText from '../components/common/CustomText';
import Loading from '../components/common/Loading';
import MonthHeader from '../components/common/MonthHeader';
import EditCategoryDrawer from '../components/Budget/Drawers/EditCategoryDrawer';

const DashScreen: React.FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<categoryType[]>([]);
  const [isAdd, setIsAdd] = useState(true);
  const [editableCategory, setEditableCategory] = useState<categoryType>({
    title: '',
  });
  const refRBSheet = React.createRef<RBSheet>();

  const fetchCategories = async () => {
    try {
      const { data } = await api.getCategories();

      setCategories(data);
    } catch (error) {
      console.log(error); //todo error handling
    }
  };
  const handleAddPress = () => {
    setIsAdd(true);
    refRBSheet.current!.open();
  };

  const handleEditPress = (category: categoryType) => {
    setIsAdd(false);
    setEditableCategory(category);
    refRBSheet.current!.open();
  };

  useEffect(() => {
    fetchCategories();
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <MonthHeader />
      <View style={{ padding: 10 }}>
        <AccountTab />
      </View>

      <View style={{ flex: 1 }}>
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
              pressHandler={handleAddPress}
            />
          </View>
        )}
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={categories}
            renderItem={({ item }: { item: categoryType }) => (
              <Category
                key={item._id}
                category={item}
                handleAddPress={handleAddPress}
                handleEditPress={handleEditPress}
              />
            )}
            keyExtractor={(item) => item._id + ''}
          />
        )}
      </View>
      <RBSheet
        ref={refRBSheet}
        height={200}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        {isAdd ? (
          <AddCategoryDrawer
            setLoading={setIsLoading}
            isLoading={isLoading}
            onClose={() => refRBSheet.current?.close()}
          />
        ) : (
          <EditCategoryDrawer
            category={editableCategory}
            setLoading={setIsLoading}
            isLoading={isLoading}
            onClose={() => refRBSheet.current?.close()}
          />
        )}
      </RBSheet>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoryWrapper: { paddingTop: 35, width: '95%', justifyContent: 'center' },
});
export default DashScreen;
