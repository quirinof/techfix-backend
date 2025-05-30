import { ServiceOrderItem } from "@prisma/client";
import { ServiceOrderItemRepository } from "../../repositories/service-order-item-repository";

interface ServiceOrderResponse {
  serviceOrderItem: ServiceOrderItem | null;
}

export class FindServiceOrderItemByIdService {
  constructor(private serviceOrderItemRepository: ServiceOrderItemRepository) {}

  async handle(id: number): Promise<ServiceOrderResponse> {
    const serviceOrderItem = await this.serviceOrderItemRepository.findById(id);

    return {
      serviceOrderItem,
    };
  }
}
