import multer from 'multer';

// Configurando multer para armazenar os arquivos em memória
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // Limite de 5 MB
  }
});

export default upload;