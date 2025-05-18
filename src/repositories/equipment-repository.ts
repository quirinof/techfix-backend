import { Equipment, Prisma } from "@prisma/client";

export interface EquipmentRepository {
  create(data: Prisma.EquipmentCreateInput): Promise<Equipment>;
  findManyByCustomerId(customerId: number): Promise<Equipment[]>;
  findById(id: number, customerId: number): Promise<Equipment | null>;
  update(id: number, data: Prisma.EquipmentUpdateInput): Promise<Equipment>;
  delete(id: number): Promise<void>;
}
