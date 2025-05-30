import { Bill, Prisma } from "@prisma/client";

export interface BillRepository {
  create(data: Prisma.BillCreateInput): Promise<Bill>;
  findMany(): Promise<Bill[]>;
  findById(id: number): Promise<Bill | null>;
  update(id: number, data: Prisma.BillUpdateInput): Promise<Bill>;
  delete(id: number): Promise<void>;
}
