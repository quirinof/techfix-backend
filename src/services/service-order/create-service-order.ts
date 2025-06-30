import { ServiceOrder } from "@prisma/client";
import { ServiceOrderRepository } from "../../repositories/service-order-repository";
import { serviceOrderSchemaType } from "../../schemas/service-order-schema";

type CreateServiceOrderRequest = serviceOrderSchemaType;

interface CreateServiceOrderResponse {
  serviceOrder: ServiceOrder;
}

export class CreateServiceOrderService {
  constructor(private serviceOrderRepository: ServiceOrderRepository) {}

  async handle(
    req: CreateServiceOrderRequest
  ): Promise<CreateServiceOrderResponse> {
    const { customerId, ...serviceOrderData } = req;

    const serviceOrder = await this.serviceOrderRepository.create({
      ...serviceOrderData,
      customer: { connect: { id: customerId } },
    });

    return { serviceOrder };
  }
}
