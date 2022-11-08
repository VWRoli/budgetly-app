export interface budgetItemType {
  title: string;
  userId?: number;
  _id?: string;
  categoryId: string;
  spent: number;
  balance: number;
  updatedAt?: string;
  createdAt?: string;
}
