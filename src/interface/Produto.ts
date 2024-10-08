export interface Produto {
    id: string;
    nome: string;
    fornecedor: string;
    categoria: number;
    subcategoria: number;
    preco: number;
    promocao: boolean;
    bucket: string;
    createdAt: Date;
    updatedAt?: Date;
  }
