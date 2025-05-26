import { ServiceOrder } from "@prisma/client";
import { ServiceOrderRepository } from "../../repositories/service-order-repository";
import { Decimal } from "@prisma/client/runtime/library";

interface CreateServiceOrderRequest {
  description: string;
  estimate: Decimal;
  customer: {
    connect: {
      id: number;
    };
  };
}

interface CreateServiceOrderResponse {
  serviceOrder: ServiceOrder;
}

export class CreateServiceOrderService {
  constructor(private serviceOrderRepository: ServiceOrderRepository) {}

  async handle({
    description,
    estimate,
    customer,
  }: CreateServiceOrderRequest): Promise<CreateServiceOrderResponse> {
    const serviceOrder = await this.serviceOrderRepository.create({
      description,
      estimate,
      customer,
    });

    return { serviceOrder };
  }
}
