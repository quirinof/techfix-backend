import { Customer, Prisma } from "@prisma/client";

export interface CustomerRepository {
  create(data: Prisma.CustomerCreateInput): Promise<Customer>;
  findMany(): Promise<Customer[]>;
  findManyByName(name: string): Promise<Customer[]>;
}
