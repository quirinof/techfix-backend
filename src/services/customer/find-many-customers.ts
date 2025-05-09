import { Customer } from "@prisma/client";
import { CustomerRepository } from "../../repositories/customer-repository";

interface FindManyCustomersResponse {
  customer: Customer[];
}

export class FindManyCustomersService {
  constructor(private customerRepository: CustomerRepository) {}

  async execute(): Promise<FindManyCustomersResponse> {
    const customer = await this.customerRepository.findMany();
    return { customer };
  }
}
