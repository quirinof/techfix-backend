import { Prisma, Equipment } from "@prisma/client";
import { EquipmentRepository } from "../equipment-repository";
import { prisma } from "../../lib/prisma";

export class PrismaEquipmentRepository implements EquipmentRepository {
  async create(data: Prisma.EquipmentCreateInput): Promise<Equipment> {
    const equipment = await prisma.equipment.create({ data });

    return equipment;
  }

  async findManyByCustomerId(customerId: number): Promise<Equipment[]> {
    const equipments = await prisma.equipment.findMany({
      where: {
        customerId,
      },
    });
    return equipments;
  }

  async findById(id: number, customerId: number): Promise<Equipment | null> {
    const equipment = await prisma.equipment.findFirst({
      where: {
        id,
        customerId,
      },
    });
    return equipment;
  }

  async update(
    id: number,
    data: Prisma.EquipmentUpdateInput
  ): Promise<Equipment> {
    const equipment = await prisma.equipment.update({
      where: {
        id,
      },
      data,
    });
    return equipment;
  }

  async delete(id: number): Promise<void> {
    await prisma.equipment.delete({
      where: {
        id,
      },
    });
  }
}
