import { PrismaServiceOrderRepository } from "../../../repositories/prisma/prisma-service-order-repository";
import { CreateServiceOrderService } from "./../../service-order/create-service-order";

export function makeCreateServiceOrderService() {
  const serviceOrderRepository = new PrismaServiceOrderRepository();
  const service = new CreateServiceOrderService(serviceOrderRepository);

  return service;
}
