-- CreateEnum
CREATE TYPE "DeviceType" AS ENUM ('notebook', 'smartphone', 'tablet', 'desktop', 'other');

-- CreateEnum
CREATE TYPE "ServiceOrderStatus" AS ENUM ('open', 'inProgress', 'completed', 'canceled');

-- CreateEnum
CREATE TYPE "ServiceOrderItemStatus" AS ENUM ('pending', 'executing', 'completed');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('cash', 'creditCard', 'debitCard', 'pix', 'boleto');

-- CreateEnum
CREATE TYPE "bill_status" AS ENUM ('pending', 'paid', 'overdue');

-- CreateTable
CREATE TABLE "customers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "phone" VARCHAR(20),
    "email" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addresses" (
    "id" SERIAL NOT NULL,
    "complement" VARCHAR(255),
    "street" VARCHAR(150),
    "neighborhood" VARCHAR(150),
    "city" VARCHAR(100),
    "state" VARCHAR(2),
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "equipaments" (
    "id" SERIAL NOT NULL,
    "deviceType" "DeviceType" NOT NULL,
    "brand" VARCHAR(50),
    "model" VARCHAR(150),
    "serialNumber" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "equipaments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_orders" (
    "id" SERIAL NOT NULL,
    "description" TEXT,
    "status" "ServiceOrderStatus" NOT NULL DEFAULT 'open',
    "estimate" DECIMAL(10,2),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "service_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_orders_items" (
    "id" SERIAL NOT NULL,
    "description" TEXT,
    "status" "ServiceOrderItemStatus" NOT NULL DEFAULT 'pending',
    "equipmentId" INTEGER,
    "serviceOrderId" INTEGER NOT NULL,

    CONSTRAINT "service_orders_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bills" (
    "id" SERIAL NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "paymentMethod" "PaymentMethod" NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "status" "bill_status" NOT NULL DEFAULT 'pending',
    "serviceOrderId" INTEGER NOT NULL,

    CONSTRAINT "bills_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bills_serviceOrderId_key" ON "bills"("serviceOrderId");

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "equipaments" ADD CONSTRAINT "equipaments_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_orders" ADD CONSTRAINT "service_orders_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_orders_items" ADD CONSTRAINT "service_orders_items_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES "equipaments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_orders_items" ADD CONSTRAINT "service_orders_items_serviceOrderId_fkey" FOREIGN KEY ("serviceOrderId") REFERENCES "service_orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bills" ADD CONSTRAINT "bills_serviceOrderId_fkey" FOREIGN KEY ("serviceOrderId") REFERENCES "service_orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
