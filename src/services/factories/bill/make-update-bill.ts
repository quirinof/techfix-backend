import { PrismaBillRepository } from "../../../repositories/prisma/prisma-bill-repository";
import { UpdateBillService } from "../../bill/update-bill";

export function makeUpdateBillService() {
  const billRepository = new PrismaBillRepository();
  const service = new UpdateBillService(billRepository);

  return service;
}
