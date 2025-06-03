import { Bill } from "@prisma/client";
import { BillRepository } from "../../repositories/bill-repository";
import { updateBillSchemaType } from "../../schemas/bill-schema";

type UpdateBillSchema = updateBillSchemaType;

interface UpdateBillRequest extends UpdateBillSchema {
  id: number;
}

interface UpdateBillResponse {
  bill: Bill;
}

export class UpdateBillService {
  constructor(private billRepository: BillRepository) {}

  async handle(req: UpdateBillRequest): Promise<UpdateBillResponse> {
    const bill = await this.billRepository.update(req.id, {
      ...req,
    });

    return { bill };
  }
}
