export interface budgetItemType {
  title: string;
  userId?: number;
  _id?: string;
  categoryId: string;
  budgeted: number;
  outflow: number;
  balance: number;
  updatedAt?: string;
  createdAt?: string;
}
