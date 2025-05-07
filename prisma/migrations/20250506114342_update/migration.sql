/*
  Warnings:

  - You are about to drop the `addresses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `bills` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `customers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `equipaments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `service_orders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `service_orders_items` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "device_type" AS ENUM ('notebook', 'smartphone', 'tablet', 'desktop', 'other');

-- CreateEnum
CREATE TYPE "service_order_status" AS ENUM ('open', 'inProgress', 'completed', 'canceled');

-- CreateEnum
CREATE TYPE "service_order_item_status" AS ENUM ('pending', 'executing', 'completed');

-- CreateEnum
CREATE TYPE "payment_method" AS ENUM ('cash', 'creditCard', 'debitCard', 'pix', 'boleto');

-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_customerId_fkey";

-- DropForeignKey
ALTER TABLE "bills" DROP CONSTRAINT "bills_serviceOrderId_fkey";

-- DropForeignKey
ALTER TABLE "equipaments" DROP CONSTRAINT "equipaments_customerId_fkey";

-- DropForeignKey
ALTER TABLE "service_orders" DROP CONSTRAINT "service_orders_customerId_fkey";

-- DropForeignKey
ALTER TABLE "service_orders_items" DROP CONSTRAINT "service_orders_items_equipmentId_fkey";

-- DropForeignKey
ALTER TABLE "service_orders_items" DROP CONSTRAINT "service_orders_items_serviceOrderId_fkey";

-- DropTable
DROP TABLE "addresses";

-- DropTable
DROP TABLE "bills";

-- DropTable
DROP TABLE "customers";

-- DropTable
DROP TABLE "equipaments";

-- DropTable
DROP TABLE "service_orders";

-- DropTable
DROP TABLE "service_orders_items";

-- DropEnum
DROP TYPE "DeviceType";

-- DropEnum
DROP TYPE "PaymentMethod";

-- DropEnum
DROP TYPE "ServiceOrderItemStatus";

-- DropEnum
DROP TYPE "ServiceOrderStatus";

-- CreateTable
CREATE TABLE "customer" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "phone" VARCHAR(20),
    "email" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "complement" VARCHAR(255),
    "street" VARCHAR(150),
    "neighborhood" VARCHAR(150),
    "city" VARCHAR(100),
    "state" VARCHAR(2),
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "equipment" (
    "id" SERIAL NOT NULL,
    "deviceType" "device_type" NOT NULL,
    "brand" VARCHAR(50),
    "model" VARCHAR(150),
    "serialNumber" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "equipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_order" (
    "id" SERIAL NOT NULL,
    "description" TEXT,
    "status" "service_order_status" NOT NULL DEFAULT 'open',
    "estimate" DECIMAL(10,2),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "service_order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_order_item" (
    "id" SERIAL NOT NULL,
    "description" TEXT,
    "status" "service_order_item_status" NOT NULL DEFAULT 'pending',
    "equipmentId" INTEGER,
    "serviceOrderId" INTEGER NOT NULL,

    CONSTRAINT "service_order_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bill" (
    "id" SERIAL NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "paymentMethod" "payment_method" NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "status" "bill_status" NOT NULL DEFAULT 'pending',
    "serviceOrderId" INTEGER NOT NULL,

    CONSTRAINT "bill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bill_serviceOrderId_key" ON "bill"("serviceOrderId");

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "equipment" ADD CONSTRAINT "equipment_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_order" ADD CONSTRAINT "service_order_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_order_item" ADD CONSTRAINT "service_order_item_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES "equipment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_order_item" ADD CONSTRAINT "service_order_item_serviceOrderId_fkey" FOREIGN KEY ("serviceOrderId") REFERENCES "service_order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bill" ADD CONSTRAINT "bill_serviceOrderId_fkey" FOREIGN KEY ("serviceOrderId") REFERENCES "service_order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
