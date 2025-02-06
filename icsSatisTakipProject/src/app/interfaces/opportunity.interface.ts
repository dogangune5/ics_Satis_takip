export interface Opportunity {
  id: number; // Fırsat numarası (Primary Key)
  dateEntered: Date; // Fırsatın giriş tarihi
  description: string; // Fırsat açıklaması
  potentialSalesAmount: number; // Potansiyel satış tutarı
  probability: number; // Sipariş olasılığı (%)
  systemTypeCode: string; // Sistem tipi kodu (FK)
  oppStatusCode: string; // Fırsat durumu kodu (FK)
  currencyCode: string; // Para birimi kodu (FK)
  oppObtainedCode: string; // Fırsat elde etme kaynağı (FK)
}
