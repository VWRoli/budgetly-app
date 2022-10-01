import { categoryType } from './categoryType';

export interface HandlerTypes {
  handleAddPress(): void;
  handleEditPress(category: categoryType): void;
  handleDeletePress(category: categoryType): void;
}
