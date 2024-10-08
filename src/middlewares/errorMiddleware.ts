import { Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
  status?: number;
}

export const errorMiddleware = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;  // Se o erro tiver um status definido, use-o, senão use 500
  const message = err.message || 'Ocorreu um erro interno no servidor';
  
  // Log detalhado para monitoramento
  console.error(`[ERROR] - ${req.method} ${req.originalUrl} - Status: ${status} - Message: ${message}`);

  // Enviar a resposta de erro ao cliente
  res.status(status).json({
    success: false,
    message,
    // Apenas retornar a stack do erro em ambiente de desenvolvimento
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};
