-- CreateEnum
CREATE TYPE "document_type" AS ENUM ('cpf', 'rg', 'cnh', 'passaporte', 'cnpj');

-- AlterTable
ALTER TABLE "customer" ADD COLUMN     "document" VARCHAR(20),
ADD COLUMN     "documentType" "document_type";
