import { Request, Response, NextFunction } from 'express';
import ProdutoService from '../services/ProdutoService';
import { CustomError } from '../utils/CustomError';
import { Produto } from '../interface/Produto';

class ProdutoController {
  async getProdutos(req: Request, res: Response, next: NextFunction) {
    try {
      const produtos: Produto[] = await ProdutoService.getProdutos();
      res.json(produtos);
    } catch (error) {
      next(error);
    }
  }

  async getProdutoById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const produto: Produto | null = await ProdutoService.getProdutoById(id);
      if (!produto) {
        throw new CustomError('Produto não encontrado', 404);
      }
      res.json(produto);
    } catch (error) {
      next(error);
    }
  }

  async createProduto(req: Request, res: Response, next: NextFunction) {
    try {
      const { nome, fornecedor, categoria, subcategoria, preco, promocao, bucket } = req.body;
      const novoProduto: Produto = await ProdutoService.createProduto({
        nome,
        fornecedor,
        categoria,
        subcategoria,
        preco,
        promocao,
        bucket
      });
      res.status(201).json(novoProduto);
    } catch (error) {
      next(error);
    }
  }

  async updateProduto(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const produtoAtualizado: Produto = await ProdutoService.updateProduto(id, updatedData);
      res.json(produtoAtualizado);
    } catch (error) {
      next(error);
    }
  }

  async deleteProduto(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await ProdutoService.deleteProduto(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export default new ProdutoController();