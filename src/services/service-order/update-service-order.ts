import { ServiceOrder, ServiceOrderStatus } from "@prisma/client";
import { ServiceOrderRepository } from "../../repositories/service-order-repository";

interface UpdateServiceOrderRequest {
  id: number;
  description?: string;
  estimate?: number;
  status?: ServiceOrderStatus;
}

interface UpdateServiceOrderResponse {
  serviceOrder: ServiceOrder;
}

export class UpdateServiceOrderService {
  constructor(private serviceOrderRepository: ServiceOrderRepository) {}

  async handle({
    id,
    description,
    estimate,
    status,
  }: UpdateServiceOrderRequest): Promise<UpdateServiceOrderResponse> {
    const serviceOrder = await this.serviceOrderRepository.update(id, {
      description,
      estimate,
      status,
    });

    return { serviceOrder };
  }
}
