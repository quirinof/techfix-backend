import { Prisma, Bill } from "@prisma/client";
import { BillRepository } from "../bill-repository";
import { prisma } from "../../lib/prisma";

export class PrismaBillRepository implements BillRepository {
  async create(data: Prisma.BillCreateInput): Promise<Bill> {
    const bill = await prisma.bill.create({ data });
    return bill;
  }

  async findMany(): Promise<Bill[]> {
    const bills = await prisma.bill.findMany();
    return bills;
  }

  async findById(id: number): Promise<Bill | null> {
    const bill = await prisma.bill.findUnique({
      where: { id },
    });
    return bill;
  }

  async update(id: number, data: Prisma.BillUpdateInput): Promise<Bill> {
    const bill = await prisma.bill.update({
      where: { id },
      data,
    });
    return bill;
  }

  async delete(id: number): Promise<void> {
    await prisma.bill.delete({
      where: { id },
    });
  }
}
