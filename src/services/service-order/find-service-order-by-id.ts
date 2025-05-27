import { ServiceOrder } from "@prisma/client";
import { ServiceOrderRepository } from "../../repositories/service-order-repository";

interface ServiceOrderResponse {
  serviceOrder: ServiceOrder | null;
}

export class FindServiceOrderByIdService {
  constructor(private serviceOrderRepository: ServiceOrderRepository) {}

  async handle(id: number): Promise<ServiceOrderResponse> {
    const serviceOrder = await this.serviceOrderRepository.findById(id);

    return {
      serviceOrder,
    };
  }
}
