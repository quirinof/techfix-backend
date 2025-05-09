import { Customer } from "@prisma/client";
import { CustomerRepository } from "../../repositories/customer-repository";

interface FindCustomerByNameRequest {
  customerName: string;
}

interface FindCustomerByNameResponse {
  customer: Customer[];
}

export class FindCustomerByNameService {
  constructor(private customerRepository: CustomerRepository) {}

  async handle({
    customerName,
  }: FindCustomerByNameRequest): Promise<FindCustomerByNameResponse> {
    const customer = await this.customerRepository.findManyByName(
      customerName
    );

    if (!customer) {
      throw new Error("Customer not found");
    }

    return { customer };
  }
}