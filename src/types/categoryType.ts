import { budgetItemType } from './budgetItemType';

export interface categoryType {
  title: string;
  _id?: string;
  userId?: number;
  budgetItems: budgetItemType[];
  spent: number;
  balance: number;
  createdAt: string;
  updatedAt?: string;
}
