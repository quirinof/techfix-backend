import { PrismaServiceOrderRepository } from "../../../repositories/prisma/prisma-service-order-repository";
import { FindServiceOrderByIdService } from "../../../services/service-order/find-service-order-by-id";

export function makeFindServiceOrderById() {
  const serviceOrderRepository = new PrismaServiceOrderRepository();
  const service = new FindServiceOrderByIdService(serviceOrderRepository);

  return service;
}
