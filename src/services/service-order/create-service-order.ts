import { ServiceOrder } from "@prisma/client";
import { ServiceOrderRepository } from "../../repositories/service-order-repository";
import { Decimal } from "@prisma/client/runtime/library";

interface CreateServiceOrderRequest {
  description: string;
  estimate: Decimal;
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
