import { PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from "crypto";
import path from "path";
import s3 from "../config/s3";
import { CustomError } from "./CustomError";

// Função para gerar um nome de arquivo único
const generateFileName = (originalName: string) => {
  const fileHash = crypto.randomBytes(16).toString("hex");
  const fileExtension = path.extname(originalName);
  return `${fileHash}${fileExtension}`;
};

// Função para upload no S3
export const upload = async (fileBuffer: Buffer, originalName: string, mimeType: string) => {
  const fileName: string = generateFileName(originalName);

  const params = {
    Bucket: process.env.BUCKET_NAME!,
    Key: fileName,
    Body: fileBuffer,
    ContentType: mimeType,
  };

  try {
    await s3.send(new PutObjectCommand(params));

    return fileName;
  } catch (err) {
    console.error(err);
    throw new CustomError(err as string, 404);
  }
};

// Função para gerar URL assinada
export const get = async (fileName: string) => {
  const params = {
    Bucket: process.env.BUCKET_NAME!,
    Key: fileName,
  };

  try {
    // Gera uma URL assinada válida por um período específico
    const url = await getSignedUrl(s3, new GetObjectCommand(params), { expiresIn: 3600 });
    return url;
  } catch (err) {
    console.error(err);
    throw new CustomError(err as string, 404);
  }
};
