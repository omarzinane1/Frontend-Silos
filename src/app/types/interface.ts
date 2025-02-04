export interface silo {
  numsilo: string;
  produit: string;
  stocki: number;
  entre: number;
  consumation: number;
  stockf: number;
  statut: string;
  datevalidation: string;
}
export interface Item {
  id: number;
  name: string;
  email: string;
  role: string;
}
export interface User {
  name: string;
  email: string;
  password: string;
}
