import { categoryType } from './categoryType';

export interface HandlerTypes {
  handleAddPress(isBudget?: string): void;
  handleEditPress(category: categoryType): void;
  handleDeletePress(category: categoryType): void;
}
