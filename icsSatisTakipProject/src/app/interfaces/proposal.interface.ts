export interface Proposal {
  id: number;
  code: string;
  opportunityId: number;
  date: Date;
  totalAmount: number;
  currency: string;
  validityDate?: Date;
  expectedProfitRate?: number;
  systemTypeCode: string;
}
