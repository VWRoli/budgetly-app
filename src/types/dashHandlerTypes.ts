import { categoryType } from './categoryType';

export interface HandlerTypes {
  handleAddPress(categoryId?: string): void;
  handleEditPress(category: categoryType): void;
  handleDeletePress(category: categoryType): void;
}
