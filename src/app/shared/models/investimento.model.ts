import { InvestimentoType } from './investimento-type.model';

export interface Investimento {
    id: string;
    code: string;
    name: string;
    value: number;
    type: InvestimentoType;
    transactions: Transaction[];
    incomes: Income[]
}

export interface Transaction {
    isBuying: boolean;
    value_paid: number;
    quantity: number;
    date: Date;
}

export interface Income {
    value_paid: number;
    date: Date;
}
