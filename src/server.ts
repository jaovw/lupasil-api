import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorMiddleware } from './middlewares/errorMiddleware';
import router from './routes/produtoRoutes';

dotenv.config();

const app = express();

const allowedOrigins = [process.env.REACT_URL!];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options))

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
