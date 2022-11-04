export interface transactionType {
  payee: string;
  user_id?: string;
  _id?: string;
  outcome: string | number;
  date: string;
  categoryId: string;
  budgetId: string;
  categoryTitle: string;
  budgetItemTitle: string;
  income: string | number;
  createdAt?: string;
  updatedAt?: string;
}
