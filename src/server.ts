import express from 'express';
import dotenv from 'dotenv';
// import produtoRoutes from './routes/ProdutoRoutes';
import { errorMiddleware } from './middlewares/errorMiddleware';
import router from './routes/produtoRoutes';

dotenv.config();

const app = express();

// Middleware para JSON
app.use(express.json());

// Rotas de produtos
app.use(router);

// Middleware de tratamento de erros
app.use(errorMiddleware);

// Porta configurada no arquivo .env
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
