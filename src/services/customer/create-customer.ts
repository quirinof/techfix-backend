import { CustomerRepository } from "../../repositories/customer-repository";
import { Customer } from "../../../prisma/src/generated/client";

interface CreateCustomerRequest {
  name: string;
  email: string;
  phone: string;
}

interface CreateCustomerResponse {
  customer: Customer;
}

export class CreateCustomerService {
  constructor(private customerRepository: CustomerRepository) {}

  async handle({
    name,
    email,
    phone,
  }: CreateCustomerRequest): Promise<CreateCustomerResponse> {
    const customer = await this.customerRepository.create({
      name,
      email,
      phone,
    });

    return {
      customer,
    };
  }
}
