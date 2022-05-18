export interface transactionType {
  payee: string;
  userId: number;
  id: number;
  amount: number;
  currency: string;
  date: string;
  categoryId: number;
  budgetItemsId: number;
  accountId: number;
  categoryTitle: string;
  budgetItemTitle: string;
  income?: boolean;
}
