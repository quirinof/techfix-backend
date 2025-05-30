import { ServiceOrderItem, Prisma } from "@prisma/client";

export interface FindManyParams {
  skip: number;
  take: number;
}

export interface ServiceOrderItemRepository {
  create(data: Prisma.ServiceOrderItemCreateInput): Promise<ServiceOrderItem>;
  findMany({ skip, take }: FindManyParams): Promise<ServiceOrderItem[]>;
  count(): Promise<number>;
  findById(id: number): Promise<ServiceOrderItem | null>;
  update(
    id: number,
    data: Prisma.ServiceOrderItemUpdateInput
  ): Promise<ServiceOrderItem>;
  delete(id: number): Promise<void>;
}
