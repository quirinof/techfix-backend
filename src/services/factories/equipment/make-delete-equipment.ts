import { PrismaEquipmentRepository } from "../../../repositories/prisma/prisma-equipment-repository";
import { DeleteEquipmentService } from "../../../services/equipment/delete-equipment";

export function makeDeleteEquipmentService() {
  const equipmentRepository = new PrismaEquipmentRepository();
  const service = new DeleteEquipmentService(equipmentRepository);

  return service;
}
