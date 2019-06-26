export interface Bill {
    id: string;
    value: number;
    date: Date;
    description: string;
    type: BillType;
}

export enum BillType {
    Despesa = 0,
    Receita = 1
}