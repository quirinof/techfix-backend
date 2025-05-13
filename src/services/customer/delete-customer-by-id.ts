import { CustomerRepository } from "../../repositories/customer-repository";

export class DeleteCustomerByIdService {
  constructor(private customerRepository: CustomerRepository) {}

  async handle(id: number): Promise<void> {
    return await this.customerRepository.delete(id);
  }
}
