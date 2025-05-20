import { Equipment } from "@prisma/client";
import { EquipmentRepository } from "../../repositories/equipment-repository";
import { equipmentSchemaType } from "../../schemas/equipment-schema";

type CreateEquipmentRequest = equipmentSchemaType;

interface CreateEquipmentResponse {
  equipment: Equipment;
}

export class CreateEquipmentService {
  constructor(private equipmentRepository: EquipmentRepository) {}

  async handle(req: CreateEquipmentRequest): Promise<CreateEquipmentResponse> {
    const equipment = await this.equipmentRepository.create({
      ...req,
      customer: { connect: { id: req.customerId } },
    });

    return { equipment };
  }
}
