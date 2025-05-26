import { PrismaServiceOrderRepository } from "../../../repositories/prisma/prisma-service-order-repository";
import { FindManyServiceOrdersService } from "./../../service-order/find-many-service-orders";

export function makeFindManyServiceOrdersService() {
  const serviceOrderRepository = new PrismaServiceOrderRepository();
  const service = new FindManyServiceOrdersService(serviceOrderRepository);

  return service;
}
