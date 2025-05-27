import { PrismaServiceOrderRepository } from "../../../repositories/prisma/prisma-service-order-repository";
import { UpdateServiceOrderService } from "./../../service-order/update-service-order";

export function makeUpdateServiceOrderService() {
  const serviceOrderRepository = new PrismaServiceOrderRepository();
  const service = new UpdateServiceOrderService(serviceOrderRepository);

  return service;
}
