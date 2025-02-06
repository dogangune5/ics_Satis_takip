export interface Customer {
  id: number; // Primary Key (PK)
  title: string; // Müşteri adı veya unvanı
  invoiceAddress: string; // Fatura adresi
  deliveryAddress: string; // Teslimat adresi
  phone: string; // Telefon numarası
  taxOffice: string; // Vergi dairesi
  taxNumber: string; // Vergi numarası
}
