import { Bill } from "@prisma/client";
import { BillRepository } from "../../repositories/bill-repository";

interface FindManyBillsRequest {
  page: number;
  perPage: number;
  serviceOrderId: number;
}
interface FindManyBillsResponse {
  bills: Bill[];
  total: number;
}

export class FindManyBillsService {
  constructor(private billRepository: BillRepository) {}

  async handle({
    page,
    perPage,
    serviceOrderId,
  }: FindManyBillsRequest): Promise<FindManyBillsResponse> {
    const skip = (page - 1) * perPage;
    const take = perPage;

    const [bills, total] = await Promise.all([
      this.billRepository.findMany({ skip, take, serviceOrderId }),
      this.billRepository.count(),
    ]);

    return { bills, total };
  }
}
