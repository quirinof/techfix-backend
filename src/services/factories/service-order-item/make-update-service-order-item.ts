import { PrismaServiceOrderItemRepository } from "../../../repositories/prisma/prisma-service-order-item-repository";
import { UpdateServiceOrderItemService } from "../../service-order-item/update-service-order-item";

export function makeUpdateServiceOrderItemService() {
  const serviceOrderRepository = new PrismaServiceOrderItemRepository();
  const service = new UpdateServiceOrderItemService(serviceOrderRepository);

  return service;
}
