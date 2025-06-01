import { PrismaBillRepository } from "../../../repositories/prisma/prisma-bill-repository";
import { FindBillByIdService } from "../../../services/bill/find-bill-by-id";

export function makeFindBillByIdService() {
  const billRepository = new PrismaBillRepository();
  const service = new FindBillByIdService(billRepository);

  return service;
}
