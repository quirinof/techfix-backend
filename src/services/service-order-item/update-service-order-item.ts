import { ServiceOrderItem } from "@prisma/client";
import { UpdateServiceOrderItemSchemaType } from "../../schemas/service-order-item-schema";
import { ServiceOrderItemRepository } from "../../repositories/service-order-item-repository";

type UpdateServiceOrderSchema = UpdateServiceOrderItemSchemaType;

interface UpdateServiceOrderItemRequest extends UpdateServiceOrderSchema {
  id: number;
}

interface UpdateServiceOrderItemResponse {
  serviceOrderItem: ServiceOrderItem;
}

export class UpdateServiceOrderItemService {
  constructor(private serviceOrderItemRepository: ServiceOrderItemRepository) {}

  async handle(
    req: UpdateServiceOrderItemRequest
  ): Promise<UpdateServiceOrderItemResponse> {
    const serviceOrderItem = await this.serviceOrderItemRepository.update(
      req.id,
      {
        ...req,
      }
    );

    return { serviceOrderItem };
  }
}
