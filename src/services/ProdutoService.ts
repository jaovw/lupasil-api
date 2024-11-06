import { ObjectId } from "mongodb";
import prisma from "../config/db";
import { Produto } from "../interface/Produto";
import { get } from "../utils/S3Methods";

class ProdutoService {
  async getProdutos(): Promise<Produto[]> {
    const lista_produto: Produto[] = await prisma.produto.findMany();
    // Buscar ma forma mais dinamica para listar as imagens
    for (const produto of lista_produto) {
      produto.url = await get(produto.bucket)
    }

    return lista_produto;
  }

  async getProdutoById(id: string): Promise<Produto | null> {
    return prisma.produto.findUnique({
      where: { id: new ObjectId(id).toString() },
    });
  }

  async createProduto(data: Omit<Produto, 'updatedAt'>): Promise<Produto> {
    return prisma.produto.create({ data });
  }

  async updateProduto(id: string, data: Partial<Produto>): Promise<Produto> {
    return prisma.produto.update({
      where: { id },
      data: {
        ...data,
        updatedAt: data.updatedAt ? new Date(data.updatedAt) : undefined,
      },
    });
  }

  async deleteProduto(id: string): Promise<void> {
    await prisma.produto.delete({ where: { id } });
  }
}

export default new ProdutoService();
