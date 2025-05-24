import { ServiceOrder, Prisma } from "@prisma/client";

export interface FindManyParams {
  skip: number;
  take: number;
}

export interface ServiceOrderRepository {
  create(data: Prisma.ServiceOrderCreateInput): Promise<ServiceOrder>;
}
