import { ServiceOrder, ServiceOrderStatus } from "@prisma/client";
import { ServiceOrderRepository } from "../../repositories/service-order-repository";
import { updateServiceOrderSchemaType } from "../../schemas/service-order-schema";

type UpdateServiceOrderSchema = updateServiceOrderSchemaType;

interface UpdateServiceOrderRequest extends UpdateServiceOrderSchema {
  id: number;
}

interface UpdateServiceOrderResponse {
  serviceOrder: ServiceOrder;
}

export class UpdateServiceOrderService {
  constructor(private serviceOrderRepository: ServiceOrderRepository) {}

  async handle(
    req: UpdateServiceOrderRequest
  ): Promise<UpdateServiceOrderResponse> {
    const serviceOrder = await this.serviceOrderRepository.update(req.id, {
      ...req,
    });

    return { serviceOrder };
  }
}
