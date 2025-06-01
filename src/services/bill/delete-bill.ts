import { BillRepository } from "../../repositories/bill-repository";

export class DeleteBillService {
  constructor(private billRepository: BillRepository) {}

  async handle(id: number): Promise<void> {
    return await this.billRepository.delete(id);
  }
}
