import { EquipmentRepository } from "../../repositories/equipment-repository";
import { Equipment } from "@prisma/client";
import { updateEquipmentSchemaType } from "../../schemas/equipment-schema";

type updateEquipmentSchema = updateEquipmentSchemaType;

interface UpdateEquipmentRequest extends updateEquipmentSchema {
  id: number;
}

interface UpdateEquipmentResponse {
  equipment: Equipment;
}

export class UpdateEquipmentService {
  constructor(private equipmentRepository: EquipmentRepository) {}

  async handle(req: UpdateEquipmentRequest): Promise<UpdateEquipmentResponse> {
    const equipment = await this.equipmentRepository.update(req.id, {
      ...req,
    });

    return { equipment };
  }
}
