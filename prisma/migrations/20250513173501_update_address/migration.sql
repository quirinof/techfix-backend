/*
  Warnings:

  - You are about to alter the column `complement` on the `address` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(150)`.

*/
-- AlterTable
ALTER TABLE "address" ADD COLUMN     "number" VARCHAR(5),
ADD COLUMN     "zipCode" VARCHAR(10),
ALTER COLUMN "complement" SET DATA TYPE VARCHAR(150);
