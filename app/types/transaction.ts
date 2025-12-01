export interface Transaction {
  title: string;
  category: string;
  amount: number;
  type: string; // income or expense
  date: string; // ISO string: "2025-05-23"
  icon?: string; // optional icon name
}
