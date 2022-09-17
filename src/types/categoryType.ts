import { budgetItemType } from './budgetItemType';

export interface categoryType {
  title: string;
  userId: number;
  budgetItems: budgetItemType[];
  items: number;
  budgeted: number;
  available: number;
}
