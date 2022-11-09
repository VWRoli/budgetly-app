export interface transactionType {
  payee: string;
  user_id?: string;
  _id?: string;
  outflow: string | number;
  date: string;
  accountId: string;
  accountName: string;
  categoryId: string;
  budgetItemId: string;
  categoryTitle: string;
  budgetItemTitle: string;
  inflow: string | number;
  createdAt?: string;
  updatedAt?: string;
}
