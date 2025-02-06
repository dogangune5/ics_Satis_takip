export interface Payment {
  id: number;
  number: string;
  date: Date;
  amount: number;
  orderId: number;
  paymentTypeCode: string;
  bankCode?: string;
  invoiceNumber?: string;
  currencyCode: string;
}
