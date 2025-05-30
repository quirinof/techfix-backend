import { PrismaServiceOrderItemRepository } from "../../../repositories/prisma/prisma-service-order-item-repository";
import { DeleteServiceOrderItemByIdService } from "../../service-order-item/delete-service-order-item";

export function makeDeleteServiceOrderItemByIdService() {
  const serviceOrderRepository = new PrismaServiceOrderItemRepository();
  const service = new DeleteServiceOrderItemByIdService(serviceOrderRepository);

  return service;
}
