import { transactionType } from './transactionType';

export interface accountType {
  balance: number;
  _id?: string;
  name: string;
  user_id: string;
  updatedAt?: string; //isostring
  createdAt?: string; //isostring
}
