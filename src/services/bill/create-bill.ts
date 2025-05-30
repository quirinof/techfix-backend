import { Bill } from "@prisma/client";
import { BillRepository } from "../../repositories/bill-repository";
import { billSchemaType } from "../../schemas/bill-schema";

type CreateBillRequest = Omit<billSchemaType, "serviceOrderId"> & {
  serviceOrderId: number;
  dueDate: Date;
};

interface CreateBillResponse {
  bill: Bill;
}

export class CreateBillService {
  constructor(private billRepository: BillRepository) {}

  async handle(req: CreateBillRequest): Promise<CreateBillResponse> {
    const { serviceOrderId, ...rest } = req;
    const bill = await this.billRepository.create({
      ...rest,
      serviceOrder: { connect: { id: serviceOrderId } },
    });

    return { bill };
  }
}
