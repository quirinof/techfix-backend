import { Bill } from "@prisma/client";
import { BillRepository } from "../../repositories/bill-repository";

interface FindBillByIdResponse {
  bill: Bill | null;
}

export class FindBillByIdService {
  constructor(private billRepository: BillRepository) {}

  async handle(id: number): Promise<FindBillByIdResponse> {
    const bill = await this.billRepository.findById(id);
    return { bill };
  }
}
