import { ObjectId } from "mongodb";
import prisma from "../config/db";
import { Produto } from "../interface/Produto";
import { get, getUrl } from "../utils/S3Methods";
import { Prisma } from "@prisma/client";

class ProdutoService {
  async getProdutos(): Promise<Produto[]> {
    const lista_produto: Produto[] = await prisma.produto.findMany();
    // Buscar ma forma mais dinamica para listar as imagens
    for (const produto of lista_produto) {
      produto.url = await get(produto.bucket);
    }

    return lista_produto;
  }

  async getProdutoById(id: string): Promise<Produto | null> {
    return prisma.produto.findUnique({
      where: { id: new ObjectId(id).toString() },
    });
  }

  async getProdutosByFiltro(filtro: string): Promise<Produto[]> {
    const lista_produto: Produto[] = await prisma.produto.findMany({
      where: {
        OR: [
          { nome: { contains: filtro, mode: Prisma.QueryMode.insensitive } },
          { CA: { contains: filtro } },
        ],
      },
    });

    const lista_url = await getUrl(lista_produto.map((produto) => produto.bucket));

    for (const produto of lista_produto) {
      produto.url = lista_url.find((url) => url.arquivo == produto.bucket)?.url;
    }

    return lista_produto;
  }

  async createProduto(data: Omit<Produto, "updatedAt">): Promise<Produto> {
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
