import { InvestimentoType } from './investimento-type.model';

export interface Investimento {
    id: string;
    code: string;
    name: string;
    value: number;
    type: InvestimentoType;
    transactions: Transactions[];
}

export interface Transactions {
    isBuying: boolean;
    value_paid: number;
    quantity: number;
}
