import { Prisma, ServiceOrder } from "@prisma/client";
import {
  ServiceOrderRepository,
  FindManyParams,
} from "../service-order-repository";
import { prisma } from "../../lib/prisma";

export class PrismaServiceOrderRepository implements ServiceOrderRepository {
  async create(data: Prisma.ServiceOrderCreateInput): Promise<ServiceOrder> {
    const serviceOrder = await prisma.serviceOrder.create({
      data,
    });
    return serviceOrder;
  }

  async findMany({ skip, take }: FindManyParams): Promise<ServiceOrder[]> {
    return await prisma.serviceOrder.findMany({
      skip,
      take,
    });
  }

  async count(): Promise<number> {
    const count = await prisma.serviceOrder.count();
    return count;
  }

  findById(id: number): Promise<ServiceOrder | null> {
    return prisma.serviceOrder.findUnique({
      where: { id },
    });
  }

  update(
    id: number,
    data: Prisma.ServiceOrderUpdateInput
  ): Promise<ServiceOrder> {
    return prisma.serviceOrder.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.serviceOrder.delete({
      where: { id },
    });
  }
}
