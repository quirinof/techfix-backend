import { PrismaEquipmentRepository } from "../../../repositories/prisma/prisma-equipment-repository";
import { FindEquipmentByIdService } from "../../equipment/find-equipment-by-id";

export function makeFindEquipmentByIdService() {
  const equipmentRepository = new PrismaEquipmentRepository();
  const service = new FindEquipmentByIdService(equipmentRepository);

  return service;
}
