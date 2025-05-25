import { ServiceOrder, Prisma } from "@prisma/client";

export interface FindManyParams {
  skip: number;
  take: number;
}

export interface ServiceOrderRepository {
  create(data: Prisma.ServiceOrderCreateInput): Promise<ServiceOrder>;
  findMany(data: FindManyParams): Promise<ServiceOrder[]>;
  count(): Promise<number>;
  findById(id: number): Promise<ServiceOrder | null>;
  update(
    id: number,
    data: Prisma.ServiceOrderUpdateInput
  ): Promise<ServiceOrder>;
  delete(id: number): Promise<void>;
}
