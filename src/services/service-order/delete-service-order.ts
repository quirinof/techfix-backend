import { ServiceOrderRepository } from "../../repositories/service-order-repository";

export class DeleteServiceOrderByIdService {
  constructor(private serviceOrderRepository: ServiceOrderRepository) {}

  async handle(id: number): Promise<void> {
    return await this.serviceOrderRepository.delete(id);
  }
}
