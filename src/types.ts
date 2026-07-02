export interface TaxInquiry {
  name: string;
  email: string;
  phone: string;
  category: "Privatperson" | "Familie" | "Rentner" | "Berufstätig" | "Junger Erwachsener";
  region: string;
  message: string;
}

export interface ServiceDetail {
  title: string;
  description: string;
}
