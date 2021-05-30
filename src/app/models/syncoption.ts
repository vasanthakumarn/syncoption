export interface ICurrencyMarketData {
    data: ICurrencyData[]
}

export interface ICurrencyData {
    name: string;
    desription?: string;
    icon?: string;
    bid: number;
    ask: number;
    onedaychange: number;
    type: string;
}