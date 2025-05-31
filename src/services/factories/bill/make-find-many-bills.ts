import { PrismaBillRepository } from "../../../repositories/prisma/prisma-bill-repository";
import { FindManyBillsService } from "../../bill/find-many-bills";

export function makeFindManyBillsService() {
  const billRepository = new PrismaBillRepository();
  const service = new FindManyBillsService(billRepository);

  return service;
}
