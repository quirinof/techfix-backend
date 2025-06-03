import { Bill, Prisma } from "@prisma/client";

export interface FindManyParams {
  skip: number;
  take: number;
}

export interface BillRepository {
  create(data: Prisma.BillCreateInput): Promise<Bill>;
  findMany({ skip, take }: FindManyParams): Promise<Bill[]>;
  count(): Promise<number>;
  findById(id: number): Promise<Bill | null>;
  update(id: number, data: Prisma.BillUpdateInput): Promise<Bill>;
  delete(id: number): Promise<void>;
}
