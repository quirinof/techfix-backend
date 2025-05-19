import { PrismaEquipmentRepository } from "../../../repositories/prisma/prisma-equipment-repository";
import { UpdateEquipmentService } from "../../../services/equipment/update-equipment";

export function makeUpdateEquipmentService() {
  const equipmentRepository = new PrismaEquipmentRepository();
  const service = new UpdateEquipmentService(equipmentRepository);

  return service;
}
