import { ServiceOrder } from "@prisma/client";
import { ServiceOrderRepository } from "../../repositories/service-order-repository";

interface FindManyServiceOrdersRequest {
  page: number;
  perPage: number;
}

interface FindManyServiceOrdersResponse {
  serviceOrders: ServiceOrder[];
  total: number;
}

export class FindManyServiceOrdersService {
  constructor(private serviceOrderRepository: ServiceOrderRepository) {}

  async handle({
    page,
    perPage,
  }: FindManyServiceOrdersRequest): Promise<FindManyServiceOrdersResponse> {
    const skip = (page - 1) * perPage;

    const [serviceOrders, total] = await Promise.all([
      this.serviceOrderRepository.findMany({ skip, take: perPage }),
      this.serviceOrderRepository.count(),
    ]);

    return { serviceOrders, total };
  }
}
