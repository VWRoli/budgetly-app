import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { categoryType } from '../types/categoryType';
import { useBudgetsContext } from '../context/BudgetsContext';
import { HandlerTypes } from '../types/dashHandlerTypes';
//Components
import AccountTab from '../components/Budget/AccountTab';
import AddDrawer from '../components/Budget/Drawers/AddDrawer';
import Category from '../components/Budget/Category';
import Button from '../components/common/Button';
import CustomText from '../components/common/CustomText';
import MonthHeader from '../components/common/MonthHeader';
import EditCategoryDrawer from '../components/Budget/Drawers/EditCategoryDrawer';
import CustomModal from '../components/common/Modal';
import ConfirmDeleteModal from '../components/Modals/ConfirmDeleteModal';

const DashScreen: React.FC = (): JSX.Element => {
  const [isAdd, setIsAdd] = useState(true);
  const [categoryId, setCategoryId] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [editableCategory, setEditableCategory] = useState<categoryType>({
    title: '',
    budgetItems: [],
    createdAt: '',
    updatedAt: '',
  });
  const { state } = useBudgetsContext();
  const refRBSheet = React.createRef<RBSheet>();
  const sortedCategories = state.categories.sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
  );
  console.log({ sortedCategories });
  const handlers: HandlerTypes = {
    handleAddPress(categoryId?: string) {
      setIsAdd(true);
      refRBSheet.current!.open();
      if (categoryId) setCategoryId(categoryId);
    },
    handleEditPress(category: categoryType) {
      setIsAdd(false);
      setEditableCategory(category);
      refRBSheet.current!.open();
    },
    handleDeletePress(category: categoryType) {
      setModalVisible(true);
      setEditableCategory(category);
    },
  };

  return (
    <View style={styles.container}>
      <MonthHeader />
      <View style={{ padding: 10 }}>
        <AccountTab />
      </View>
      {state.loading && <CustomText text="Loading..." />}
      <View style={{ flex: 1 }}>
        {!state.categories?.length && (
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
              pressHandler={() => handlers.handleAddPress()}
            />
          </View>
        )}

        <FlatList
          data={sortedCategories}
          renderItem={({ item }: { item: categoryType }) => (
            <Category key={item._id} category={item} handlers={handlers} />
          )}
          keyExtractor={(item) => item._id + ''}
        />
      </View>
      <RBSheet
        ref={refRBSheet}
        height={150}
        onClose={() => setCategoryId('')}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        {isAdd ? (
          <AddDrawer
            onClose={() => {
              setCategoryId('');
              refRBSheet.current?.close();
            }}
            categoryId={categoryId}
          />
        ) : (
          <EditCategoryDrawer
            category={editableCategory}
            onClose={() => refRBSheet.current?.close()}
          />
        )}
      </RBSheet>
      {modalVisible && (
        <CustomModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        >
          <ConfirmDeleteModal
            category={editableCategory}
            setModalVisible={setModalVisible}
          />
        </CustomModal>
      )}
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
