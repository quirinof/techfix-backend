import { PrismaEquipmentRepository } from "../../../repositories/prisma/prisma-equipment-repository";
import { FindManyEquipmentsService } from "../../equipment/find-many-equipments";

export function makeFindManyEquipmentsService() {
  const equipmentRepository = new PrismaEquipmentRepository();
  const service = new FindManyEquipmentsService(equipmentRepository);

  return service;
}
