import { Router } from 'express';
import ProdutoController from '../controllers/ProdutoController';
import upload from '../middlewares/multer';

const router = Router();

router.get('/produtos', ProdutoController.getProdutos);
router.get('/produtos/:id', ProdutoController.getProdutoById);
router.post('/produtos', upload.single('file'), ProdutoController.createProduto);
router.put('/produtos/:id', ProdutoController.updateProduto);
router.delete('/produtos/:id', ProdutoController.deleteProduto);

export default router;
