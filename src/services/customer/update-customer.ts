import { Customer, DocumentType } from "@prisma/client";
import { CustomerRepository } from "../../repositories/customer-repository";
import { z } from "zod";
import { updateCustomerSchema } from "../../schemas/customer-schema";

type CustomerData = z.infer<typeof updateCustomerSchema>;

interface UpdateCustomerRequest extends CustomerData {
  id: number;
}

interface UpdateCustomerResponse {
  customer: Customer;
}

export class UpdateCustomerService {
  constructor(private customerRepository: CustomerRepository) {}

  async handle({
    id,
    name,
    document,
    documentType,
    email,
    phone,
  }: UpdateCustomerRequest): Promise<UpdateCustomerResponse> {
    const customer = await this.customerRepository.update(id, {
      name,
      document,
      documentType,
      email,
      phone,
    });

    return { customer };
  }
}