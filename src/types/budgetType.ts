import { accountType } from './accountType';

export interface budgetType {
  currency: string;
  available: number;
  _id?: string;
  user_id?: string;
  accounts: accountType[];
  updatedAt?: string; //isostring
  createdAt?: string; //isostring
}
