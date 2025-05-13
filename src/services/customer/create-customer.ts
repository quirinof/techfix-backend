import { Customer } from "@prisma/client";
import { CustomerRepository } from "../../repositories/customer-repository";
import { z } from "zod";
import { createCustomerSchema } from "../../schemas/customer-schema";

type CreateCustomerRequest = z.infer<typeof createCustomerSchema>;

interface CreateCustomerResponse {
  customer: Customer;
}

export class CreateCustomerService {
  constructor(private customerRepository: CustomerRepository) {}

  async handle({
    name,
    document,
    documentType,
    email,
    phone,
  }: CreateCustomerRequest): Promise<CreateCustomerResponse> {
    const customer = await this.customerRepository.create({
      name,
      document,
      documentType,
      email,
      phone,
    });

    return { customer};
  }
}
