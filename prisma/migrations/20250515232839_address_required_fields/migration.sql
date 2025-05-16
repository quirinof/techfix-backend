/*
  Warnings:

  - Made the column `street` on table `address` required. This step will fail if there are existing NULL values in that column.
  - Made the column `neighborhood` on table `address` required. This step will fail if there are existing NULL values in that column.
  - Made the column `city` on table `address` required. This step will fail if there are existing NULL values in that column.
  - Made the column `state` on table `address` required. This step will fail if there are existing NULL values in that column.
  - Made the column `number` on table `address` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "address" ALTER COLUMN "street" SET NOT NULL,
ALTER COLUMN "neighborhood" SET NOT NULL,
ALTER COLUMN "city" SET NOT NULL,
ALTER COLUMN "state" SET NOT NULL,
ALTER COLUMN "number" SET NOT NULL;
