import { Prisma, ServiceOrder } from "@prisma/client";
import { ServiceOrderRepository } from "../service-order-repository";
import { prisma } from "../../lib/prisma";

export class PrismaServiceOrderRepository implements ServiceOrderRepository {
  async create(data: Prisma.ServiceOrderCreateInput): Promise<ServiceOrder> {
    const serviceOrder = await prisma.serviceOrder.create({
      data,
    });
    return serviceOrder;
  }
}
