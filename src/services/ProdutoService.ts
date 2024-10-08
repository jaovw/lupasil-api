import prisma from "../config/db";
import { Produto } from "../interface/Produto";

class ProdutoService {
  async getProdutos(): Promise<Produto[]> {
    return prisma.produto.findMany();
  }

  async getProdutoById(id: string): Promise<Produto | null> {
    return prisma.produto.findUnique({ where: { id } });
  }

  async createProduto(data: Omit<Produto, 'id' | 'createdAt' | 'updatedAt'>): Promise<Produto> {
    return prisma.produto.create({ data });
  }

  async updateProduto(id: string, data: Partial<Produto>): Promise<Produto> {
    return prisma.produto.update({ where: { id }, data });
  }

  async deleteProduto(id: string): Promise<void> {
    await prisma.produto.delete({ where: { id } });
  }
}

export default new ProdutoService();
