import React from 'react';
import { StyleSheet, View } from 'react-native';
import { budgetItemType } from '../../../types/budgetItemType';
import { categoryType } from '../../../types/categoryType';
import { HandlerTypes } from '../../../types/dashHandlerTypes';
//Components
import Button from '../../common/Button';
import CustomText from '../../common/CustomText';
import BudgetItem from '../BudgetItem';
import CategoryHeader from './CategoryHeader';
interface Props {
  category: categoryType;
  handlers: HandlerTypes;
}

const Category: React.FC<Props> = (props): JSX.Element => {
  return (
    <View style={styles.container}>
      <CategoryHeader category={props.category} handlers={props.handlers} />
      <View>
        {!props.category.budgetItems?.length && (
          <View
            style={{
              marginVertical: 10,
              alignItems: 'center',
            }}
          >
            <CustomText
              text="You dont have any items in this category yet"
              styles={{ marginVertical: 10 }}
            />
            <Button label="Create Item" pressHandler={() => {}} slim />
          </View>
        )}
        {props.category.budgetItems?.map((b: budgetItemType) => (
          <BudgetItem key={b._id} item={b} />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F4F4',
    marginHorizontal: 10,
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
  },
});

export default Category;
