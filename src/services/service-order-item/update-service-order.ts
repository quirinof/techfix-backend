import { ServiceOrderItem } from "@prisma/client";
import { UpdateServiceOrderItemSchemaType } from "../../schemas/service-order-item-schema";
import { ServiceOrderItemRepository } from "../../repositories/service-order-item-repository";

type UpdateServiceOrderSchema = UpdateServiceOrderItemSchemaType;

interface UpdateServiceOrderRequest extends UpdateServiceOrderSchema {
  id: number;
}

interface UpdateServiceOrderResponse {
  serviceOrderItem: ServiceOrderItem;
}

export class UpdateServiceOrderService {
  constructor(private serviceOrderItemRepository: ServiceOrderItemRepository) {}

  async handle(
    req: UpdateServiceOrderRequest
  ): Promise<UpdateServiceOrderResponse> {
    const serviceOrderItem = await this.serviceOrderItemRepository.update(
      req.id,
      {
        ...req,
      }
    );

    return { serviceOrderItem };
  }
}
