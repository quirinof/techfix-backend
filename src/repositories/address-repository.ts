import { Address, Prisma } from "@prisma/client";

export interface AddressRepository {
  create(data: Prisma.AddressCreateInput): Promise<Address>;
  findManyByCustomerId(customerId: number): Promise<Address[]>;
  findById(id: number, customerId: number): Promise<Address | null>;
}
