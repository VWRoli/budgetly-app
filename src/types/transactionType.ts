export interface transactionType {
  payee: string;
  user_id: string;
  id: string;
  amount: number;
  date: string;
  categoryId: string;
  budgetId: string;
  categoryTitle: string;
  budgetItemTitle: string;
  income: boolean;
  createdAt?: string;
  updatedAt?: string;
}
