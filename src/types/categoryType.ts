import { budgetItemType } from './budgetItemType';

export interface categoryType {
  title: string;
  _id?: string;
  userId?: number;
  budgetItems?: budgetItemType[];
  budgeted?: number;
  available?: number;
}
