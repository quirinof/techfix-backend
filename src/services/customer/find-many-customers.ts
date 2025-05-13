import { Customer } from "@prisma/client";
import { CustomerRepository } from "../../repositories/customer-repository";

interface FindManyCustomersRequest {
  page: number;
  perPage: number;
}

interface FindManyCustomersResponse {
  customers: Customer[];
  total: number;
}

export class FindManyCustomersService {
  constructor(private customerRepository: CustomerRepository) {}

  async handle({
    page,
    perPage,
  }: FindManyCustomersRequest): Promise<FindManyCustomersResponse> {
    const skip = (page - 1) * perPage;

    const [customers, total] = await Promise.all([
      this.customerRepository.findMany({ skip, take: perPage }),
      this.customerRepository.count(),
    ]);

    return { customers, total };
  }
}
