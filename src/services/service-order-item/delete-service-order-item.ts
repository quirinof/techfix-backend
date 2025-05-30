import { ServiceOrderItemRepository } from "../../repositories/service-order-item-repository";
export class DeleteServiceOrderItemByIdService {
  constructor(private serviceOrderItemRepository: ServiceOrderItemRepository) {}

  async handle(id: number): Promise<void> {
    return await this.serviceOrderItemRepository.delete(id);
  }
}
