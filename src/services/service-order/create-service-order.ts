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
    const serviceOrder = await this.serviceOrderRepository.create({
      ...req,
      customer: { connect: { id: req.customerId } },
    });

    return { serviceOrder };
  }
}
