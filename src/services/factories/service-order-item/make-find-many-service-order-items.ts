import { PrismaServiceOrderItemRepository } from "../../../repositories/prisma/prisma-service-order-item-repository";
import { FindManyServiceOrderItemService } from "../../service-order-item/find-many-service-order-item";

export function makeFindManyServiceOrderItemsService() {
  const serviceOrderRepository = new PrismaServiceOrderItemRepository();
  const service = new FindManyServiceOrderItemService(serviceOrderRepository);

  return service;
}
