import { Customer } from "@prisma/client";
import { CustomerRepository } from "../../repositories/customer-repository";

interface UpdateCustomerRequest {
  id: number;
  name: string;
  document: string;
  documentType: DocumentType;
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

    return {
      customer,
    };
  }
}