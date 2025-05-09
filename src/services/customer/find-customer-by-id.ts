import { Customer } from "@prisma/client";
import { CustomerRepository } from "../../repositories/customer-repository";

interface CustomerResponse {
  customer: Customer;
}

export class FindCustomerByIdService {
  constructor(private customerRepository: CustomerRepository) {}

  async handle(id: number): Promise<CustomerResponse> {
    const customer = await this.customerRepository.findById(id);

    return {
      customer,
    };
  }
}
