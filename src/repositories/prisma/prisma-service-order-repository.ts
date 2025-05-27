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
      include: {
        customer: { select: { name: true } },
      },
    });
    return serviceOrder;
  }

  async findMany({ skip, take }: FindManyParams): Promise<ServiceOrder[]> {
    return await prisma.serviceOrder.findMany({
      skip,
      take,
      include: {
        customer: { select: { name: true } },
      },
    });
  }

  async count(): Promise<number> {
    const count = await prisma.serviceOrder.count();
    return count;
  }

  findById(id: number): Promise<ServiceOrder | null> {
    return prisma.serviceOrder.findUnique({
      where: { id },
      include: {
        customer: { select: { name: true } },
      },
    });
  }

  update(
    id: number,
    data: Prisma.ServiceOrderUpdateInput
  ): Promise<ServiceOrder> {
    return prisma.serviceOrder.update({
      where: { id },
      data,
      include: {
        customer: { select: { name: true } },
      },
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.serviceOrder.delete({
      where: { id },
    });
  }
}
