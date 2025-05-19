import { EquipmentRepository } from "../../repositories/equipment-repository";
import { Equipment, DeviceType } from "@prisma/client";

interface UpdateEquipmentRequest {
  id: number;
  deviceType: DeviceType;
  brand: string;
  model: string;
  serialNumber: string;
}

interface UpdateEquipmentResponse {
  equipment: Equipment;
}

export class UpdateEquipmentService {
  constructor(private equipmentRepository: EquipmentRepository) {}

  async handle({
    id,
    deviceType,
    brand,
    model,
    serialNumber,
  }: UpdateEquipmentRequest): Promise<UpdateEquipmentResponse> {
    const equipment = await this.equipmentRepository.update(id, {
      deviceType,
      brand,
      model,
      serialNumber,
    });

    return { equipment };
  }
}
