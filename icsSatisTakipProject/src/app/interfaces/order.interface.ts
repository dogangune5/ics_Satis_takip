export interface Order {
  orderid: number;
  customerOrderNumber: string; // Customer Order Number
  date: string; // Date
  costTL: number; // Cost (TL)
  customerNo: number; // CUSTOMER.No (FK)
}
