import { PrismaServiceOrderItemRepository } from "../../../repositories/prisma/prisma-service-order-item-repository";
import { FindServiceOrderItemByIdService } from "../../service-order-item/find-service-order-item-by-id";

export function makeFindServiceOrderItemById() {
  const serviceOrderRepository = new PrismaServiceOrderItemRepository();
  const service = new FindServiceOrderItemByIdService(serviceOrderRepository);

  return service;
}
