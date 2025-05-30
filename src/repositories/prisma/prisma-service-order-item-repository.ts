import { Prisma, ServiceOrderItem } from "@prisma/client";
import {
  FindManyParams,
  ServiceOrderItemRepository,
} from "../service-order-item-repository";
import { prisma } from "../../lib/prisma";

export class PrismaServiceOrderItemRepository
  implements ServiceOrderItemRepository
{
  async create(
    data: Prisma.ServiceOrderItemCreateInput
  ): Promise<ServiceOrderItem> {
    const serviceOrderItem = await prisma.serviceOrderItem.create({
      data,
      include: {
        equipment: true,
      },
    });
    return serviceOrderItem;
  }

  async findMany({ skip, take }: FindManyParams): Promise<ServiceOrderItem[]> {
    return await prisma.serviceOrderItem.findMany({
      skip,
      take,
      include: {
        equipment: true,
      },
    });
  }

  async count(): Promise<number> {
    const count = await prisma.serviceOrderItem.count();
    return count;
  }

  findById(id: number): Promise<ServiceOrderItem | null> {
    return prisma.serviceOrderItem.findUnique({
      where: { id },
      include: {
        equipment: true,
      },
    });
  }

  update(
    id: number,
    data: Prisma.ServiceOrderItemUpdateInput
  ): Promise<ServiceOrderItem> {
    return prisma.serviceOrderItem.update({
      where: { id },
      data,
      include: {
        equipment: true,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.serviceOrderItem.delete({
      where: { id },
    });
  }
}
