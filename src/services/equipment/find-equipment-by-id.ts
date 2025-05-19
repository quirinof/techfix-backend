import { Equipment } from "@prisma/client";
import { EquipmentRepository } from "../../repositories/equipment-repository";

interface FindEquipmentByIdResponse {
  equipment: Equipment | null;
}

export class FindEquipmentByIdService {
  constructor(private equipmentRepository: EquipmentRepository) {}

  async findById(
    id: number,
    customerId: number
  ): Promise<FindEquipmentByIdResponse> {
    const equipment = await this.equipmentRepository.findById(id, customerId);

    return {
      equipment,
    };
  }
}
