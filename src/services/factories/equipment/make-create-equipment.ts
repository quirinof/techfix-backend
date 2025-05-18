import { PrismaEquipmentRepository } from "../../../repositories/prisma/prisma-equipment-repository";
import { CreateEquipmentService } from "../../equipment/create-equipment";

export function makeCreateEquipmentService() {
  const equipmentRepository = new PrismaEquipmentRepository();
  const service = new CreateEquipmentService(equipmentRepository);

  return service;
}
