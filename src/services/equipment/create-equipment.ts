// create equipment
import { Equipment, DeviceType } from "@prisma/client";
import { EquipmentRepository } from "../../repositories/equipment-repository";

interface CreateEquipmentRequest {
  deviceType: DeviceType;
  brand: string;
  model: string;
  serialNumber: string;
  customer: number;
}

interface CreateEquipmentResponse {
  equipment: Equipment;
}

export class CreateEquipmentService {
  constructor(private equipmentRepository: EquipmentRepository) {}

  async handle({
    deviceType,
    brand,
    model,
    serialNumber,
    customer,
  }: CreateEquipmentRequest): Promise<CreateEquipmentResponse> {
    const equipment = await this.equipmentRepository.create({
      deviceType,
      brand,
      model,
      serialNumber,
      customer: { connect: { id: customer } },
    });

    return { equipment };
  }
}
