import { Customer, Prisma } from "../../prisma/src/generated/client";

export interface CustomerRepository {
  create(data: Prisma.CustomerCreateInput): Promise<Customer>;
  findMany(): Promise<Customer[]>;
  findManyByName(name: string): Promise<Customer[]>;
}
