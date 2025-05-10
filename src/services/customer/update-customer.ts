import { Customer } from "@prisma/client";
import { CustomerRepository } from "../../repositories/customer-repository";

interface UpdateCustomerRequest {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface UpdateCustomerResponse {
  customer: Customer;
}

export class UpdateCustomerService {
  constructor(private customerRepository: CustomerRepository) {}

  async handle({
    id,
    name,
    email,
    phone,
  }: UpdateCustomerRequest): Promise<UpdateCustomerResponse> {
    const customer = await this.customerRepository.update(id, {
      name,
      email,
      phone,
    });

    return {
      customer,
    };
  }
}