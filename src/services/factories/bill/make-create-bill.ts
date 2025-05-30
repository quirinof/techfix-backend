import { PrismaBillRepository } from "../../../repositories/prisma/prisma-bill-repository";
import { CreateBillService } from "./../../bill/create-bill";

export function makeCreateBillService() {
  const billRepository = new PrismaBillRepository();
  const service = new CreateBillService(billRepository);

  return service;
}
