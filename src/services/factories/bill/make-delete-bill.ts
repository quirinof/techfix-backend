import { PrismaBillRepository } from "../../../repositories/prisma/prisma-bill-repository";
import { DeleteBillService } from "../../bill/delete-bill";

export function makeDeleteBillService() {
  const billRepository = new PrismaBillRepository();
  const service = new DeleteBillService(billRepository);

  return service;
}
