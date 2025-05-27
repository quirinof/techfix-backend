import { ServiceOrder } from "@prisma/client";
import { ServiceOrderRepository } from "../../repositories/service-order-repository";

interface CreateServiceOrderRequest {
  description: string;
  estimate?: number;
  customerId: number;
}

interface CreateServiceOrderResponse {
  serviceOrder: ServiceOrder;
}

export class CreateServiceOrderService {
  constructor(private serviceOrderRepository: ServiceOrderRepository) {}

  async handle({
    description,
    estimate,
    customerId,
  }: CreateServiceOrderRequest): Promise<CreateServiceOrderResponse> {
    const serviceOrder = await this.serviceOrderRepository.create({
      description,
      estimate,
      customer: { connect: { id: customerId } },
    });

    return { serviceOrder };
  }
}
