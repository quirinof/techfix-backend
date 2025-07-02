import { ServiceOrderItem } from "@prisma/client";
import { ServiceOrderItemSchemaType } from "../../schemas/service-order-item-schema";
import { ServiceOrderItemRepository } from "../../repositories/service-order-item-repository";

type CreateServiceOrderItemRequest = ServiceOrderItemSchemaType;

interface CreateServiceOrderItemResponse {
  serviceOrderItem: ServiceOrderItem;
}

export class CreateServiceOrderItemService {
  constructor(private serviceOrderItemRepository: ServiceOrderItemRepository) {}

  async handle(
    req: CreateServiceOrderItemRequest
  ): Promise<CreateServiceOrderItemResponse> {
    const { equipmentId, serviceOrderId, ...rest } = req;

    const serviceOrderItem = await this.serviceOrderItemRepository.create({
      ...rest,
      equipment: { connect: { id: equipmentId } },
      serviceOrder: {
        connect: {
          id: req.serviceOrderId,
        },
      },
    });

    return { serviceOrderItem };
  }
}
