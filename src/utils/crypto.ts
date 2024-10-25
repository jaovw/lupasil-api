import crypto from "crypto";
import path from "path";

// Função para gerar um nome de arquivo único
export const generateFileName = (originalName: string) => {
  const fileHash = crypto.randomBytes(16).toString("hex")
  const fileExtension = path.extname(originalName)
  return `${fileHash}${fileExtension}`
};
