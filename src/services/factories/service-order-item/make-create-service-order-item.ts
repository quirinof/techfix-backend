import { PrismaServiceOrderItemRepository } from "../../../repositories/prisma/prisma-service-order-item-repository";
import { CreateServiceOrderItemService } from "../../service-order-item/create-service-order-item";

export function makeCreateServiceOrderItemService() {
  const serviceOrderRepository = new PrismaServiceOrderItemRepository();
  const service = new CreateServiceOrderItemService(serviceOrderRepository);

  return service;
}
