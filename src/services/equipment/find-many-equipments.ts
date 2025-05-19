import { EquipmentRepository } from "../../repositories/equipment-repository";
import { Equipment } from "@prisma/client";

interface FindManyEquipmentsRequest {
  customerId: number;
}

interface FindManyEquipmentsResponse {
  equipments: Equipment[];
}

export class FindManyEquipmentsService {
  constructor(private equipmentRepository: EquipmentRepository) {}

  async handle({
    customerId,
  }: FindManyEquipmentsRequest): Promise<FindManyEquipmentsResponse> {
    const equipments = await this.equipmentRepository.findManyByCustomerId(
      customerId
    );

    return { equipments };
  }
}
