import { ServiceOrderItem } from "@prisma/client";
import { ServiceOrderItemRepository } from "../../repositories/service-order-item-repository";

interface FindManyServiceOrderItensRequest {
  page: number;
  perPage: number;
}

interface FindManyServiceOrderItensResponse {
  serviceOrderItens: ServiceOrderItem[];
  total: number;
}

export class FindManyServiceOrderItemService {
  constructor(private serviceOrderItemRepository: ServiceOrderItemRepository) {}

  async handle({
    page,
    perPage,
  }: FindManyServiceOrderItensRequest): Promise<FindManyServiceOrderItensResponse> {
    const skip = (page - 1) * perPage;

    const [serviceOrderItens, total] = await Promise.all([
      this.serviceOrderItemRepository.findMany({ skip, take: perPage }),
      this.serviceOrderItemRepository.count(),
    ]);

    return { serviceOrderItens, total };
  }
}
