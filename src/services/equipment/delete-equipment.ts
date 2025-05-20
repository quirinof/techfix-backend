import { EquipmentRepository } from "../../repositories/equipment-repository";

export class DeleteEquipmentService {
  constructor(private equipmentRepository: EquipmentRepository) {}

  async handle(equipmentId: number) {
    return await this.equipmentRepository.delete(equipmentId);
  }
}
