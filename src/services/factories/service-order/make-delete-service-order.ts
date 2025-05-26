import { PrismaServiceOrderRepository } from "../../../repositories/prisma/prisma-service-order-repository";
import { DeleteServiceOrderByIdService } from "../../service-order/delete-service-order";

export function makeDeleteServiceOrderByIdService() {
  const serviceOrderRepository = new PrismaServiceOrderRepository();
  const service = new DeleteServiceOrderByIdService(serviceOrderRepository);

  return service;
}
