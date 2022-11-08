export interface budgetType {
  currency: string;
  balance: number;
  _id?: string;
  user_id?: string;
  accounts: [];
  updatedAt?: string; //isostring
  createdAt?: string; //isostring
}
