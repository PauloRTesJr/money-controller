export interface InvestimentoFII {
  id: string;
  code: string;
  name: string;
  value: number;
  transactions: Transactions[];
}

export interface Transactions {
  isBuying: boolean;
  value_paid: number;
  quantity: number;
}
