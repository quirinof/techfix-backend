import { Customer, DocumentType } from "@prisma/client";
import { CustomerRepository } from "../../repositories/customer-repository";

interface CreateCustomerRequest {
  name: string;
  document: string;
  documentType: DocumentType;
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

    return {
      customer,
    };
  }
}
