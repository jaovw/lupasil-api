export interface Produto {
  id: string;
  nome: string;
  descricao?: string | null;
  fornecedor?: string | null;
  categoria: number;
  subcategoria?: number | null;
  preco?: number | null;
  promocao?: boolean | null;
  bucket: string;
  url?: string;
  CA: number;
  estoque?: number | null;
  createdAt: Date;
  updatedAt?: Date | null;
}
