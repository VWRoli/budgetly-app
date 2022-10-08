export interface budgetItemType {
  title: string;
  userId?: number;
  _id?: number;
  categoryId: string;
  budgeted: number;
  outflow: number;
  balance: number;
}
